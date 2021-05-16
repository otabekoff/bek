<template>
  <bekFooter
    css-padding="lg"
    css-text-align="center"
    cssz-color="background"
  >
    Released under the MIT License Copyright © 2016-{{ new Date().getFullYear() }} Otabek Sadiridinov.
  </bekFooter>
</template>

<script>
import appLogo from './appLogo.vue';

export default {
  components: {
    appLogo,
  },
};
</script>