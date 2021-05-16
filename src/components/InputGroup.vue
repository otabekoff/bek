<template>
  <div :class="$style.inputGroup">
    <slot />
  </div>
</template>

<doc>
@slot default
</doc>

<example>
@config state false
@config example true

@data val = ''

<bekInputGroup>
  <bekInput v-model="val" placeholder="Type something"/>
  <bekButton css-color="primary"> Next Button </bekButton>
</bekInputGroup>
</example>

<example>
@config state false
@config example true

@data val = ''

<bekInputGroup>
  <bekButton> Pre Button </bekButton>
  <bekInput v-model="val" placeholder="Type something"/>
</bekInputGroup>
</example>

<example>
@config state false
@config example true

@data val = ''

<bekInputGroup>
  <bekButton css-color="primary" invert> Pre Button </bekButton>
  <bekInput v-model="val" placeholder="Type something"/>
  <bekButton css-color="danger" invert> Next Button </bekButton>
</bekInputGroup>
</example>

<script>
import color from '../mixins/color';
import size from '../mixins/size';

export default {
  inject: ['$theme'],
  mixins: [
    color,
    size,
  ],
  style({ className }) {
    const forceValue = (x) => `${x} !important`;
    return [
      className('inputGroup', {
        display: 'inline-flex',
        '& > *:first-child:not(:last-child)': {
          [`border-top-${this.$theme.direction.end}-radius`]: forceValue(0),
          [`border-bottom-${this.$theme.direction.end}-radius`]: forceValue(0),
        },
        '& > *:last-child:not(:first-child)': {
          [`border-top-${this.$theme.direction.start}-radius`]: forceValue(0),
          [`border-bottom-${this.$theme.direction.start}-radius`]: forceValue(0),
        },
        '& > *:not(:first-child):not(:last-child)': {
          borderRadius: forceValue(0),
        },
      }),
    ];
  },
};
</script>
