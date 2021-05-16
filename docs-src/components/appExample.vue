<template>
  <div class="bek-border bek-shadow bek-radius bek-margin-top bek-margin-bottom">
    <bekMain style="overflow: visible">
      <bekContent style="overflow: visible">
        <div
          v-if="dir"
          class="bek-text-end bek-margin"
        >
          <a
            class="bek-link"
            :href="sourceLink"
            target="_blank"
          >
            <i class="fa fa-code" />
            View Source
          </a>
        </div>
        <div class="bek-padding-top bek-padding-bottom">
          <slot />
        </div>
      </bekContent>
    </bekMain>
  </div>
</template>

<script>
export default {
  props: {
    dir: {
      type: String,
    },
  },
  computed: {
    sourceLink() {
      return `${this.$root.githubDocsRepo}/blob/master/${this.dir}`;
    },
  },
};
</script>

<style lang="scss">

</style>
