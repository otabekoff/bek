<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<doc>
@slot default

@event submit @params objectOfElementsWithFormattedValue @description Triggers when form submitted.
@event reject @params objectOfElementsWithErrors @description Triggers when form submitted but it's rejected because of element validation.
</doc>

<example>
@config title 'Default'
@config state false
@config example true

@data val0 = ''
@data val = ''
@data val2 = []
@data val3 = false
@data val4 = []
@data alert = (x) => { console.log(x) }

@data inputValidation = (x) => { return x === '2' ? true : 'The only valid value is "2"'; }
@data checkValidation = (x) => { return x.length === 3 ? true : 'You have to check 3 items'; }
@data switchValidation = (x) => { return x || 'You have to make it true'; }

@data inputFormatter = (x) => { return x === 'two' ? '2' : x }

<bekForm @submit="alert" @reject="alert" css-border="md" css-max-width="xs">
  <bekFormElement css-padding="md">
    <div slot="label"> Name </div>
    <bekInput v-model="val" placeholder="Enter your name" name="inp" :validation="inputValidation" :formatter="inputFormatter"/>
    <div slot="errors" slot-scope="scope">
      {{ scope.errors }}
    </div>
  </bekFormElement>
  <bekFormElement css-padding="md">
    <div slot="label"> Family </div>
    <bekInput v-model="val0" placeholder="Enter your family" name="inp0" required/>
    <div slot="errors" slot-scope="scope">
      {{ scope.errors }}
    </div>
  </bekFormElement>
  <bekFormElement css-padding="md">
    <div slot="label"> Gender </div>
    <bekSelect v-model="val4" placeholder="Gender" required multiple>
      <bekSelectOption value="m"> Male </bekSelectOption>
      <bekSelectOption value="f"> Female </bekSelectOption>
      <bekSelectOption value="o"> Other </bekSelectOption>
    </bekSelect>
    <div slot="errors" slot-scope="scope">
      {{ scope.errors }}
    </div>
  </bekFormElement>
  <bekFormElement css-padding="md" inline>
    <div slot="label"> Gender </div>
    <bekCheck name="check" content="ss" v-model="val2" multiple required :validation="checkValidation"> Super-Small </bekCheck>
    <bekCheck name="check" content="xs" v-model="val2" multiple required :validation="checkValidation"> X-Small </bekCheck>
    <bekCheck name="check" content="sm" v-model="val2" multiple required :validation="checkValidation"> Small </bekCheck>
    <bekCheck name="check" content="md" v-model="val2" multiple required :validation="checkValidation"> Medium </bekCheck>
    <bekCheck name="check" content="lg" v-model="val2" multiple required :validation="checkValidation"> Large </bekCheck>
    <bekCheck name="check" content="xl" v-model="val2" multiple required :validation="checkValidation"> X-Large </bekCheck>
    <bekCheck name="check" content="sl" v-model="val2" multiple required :validation="checkValidation"> Super-Large </bekCheck>
    <div slot="errors" slot-scope="scope">
      {{ scope.errors }}
    </div>
  </bekFormElement>
  <bekFormElement css-padding="md" inline>
    <div slot="label"> Gender </div>
    <bekSwitch name="switch" v-model="val3" required />
    <div slot="errors" slot-scope="scope">
      {{ scope.errors }}
    </div>
  </bekFormElement>
  <div css-margin-top="md" css-padding="md" css-border-top="md">
    <bekButton css-color="primary" type="submit"> Submit </bekButton>
  </div>
</bekForm>
</example>

<script>
export default {
  methods: {
    submit() {
      const invalids = [];
      const values = {};
      const formElements = (() => {
        const insideFunc = (el) => {
          let ret = {};
          el.$children.forEach((child) => {
            if (typeof child.validation === 'function') {
              child.valueChangesHandler(child.value);
              values[child.name] = child.formattedValue;
              ret[child.name] = {
                component: child,
                value: child.formattedValue,
                isValidate: child.isValidate,
                errors: child.errors,
              };
              if (!child.isValidate) {
                invalids.push(ret[child.name]);
              }
            } else if (child.$children.length) {
              ret = {
                ...ret,
                ...insideFunc(child),
              };
            }
          });
          return ret;
        };
        return insideFunc(this);
      })();
      if (invalids.length) {
        invalids[0].component.focus();
        this.$emit('reject', formElements);
      } else {
        this.$emit('submit', values);
      }
    },
  },
};
</script>