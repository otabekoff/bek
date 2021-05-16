/* eslint-disable no-use-before-define */
export default {
  props: ['cssColor'],
  computed: {
    $color() {
      return this.$props.cssColor || 'background';
    },
  },
};