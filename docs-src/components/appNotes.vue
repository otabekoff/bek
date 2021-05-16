<template>
  <div
    v-highlightjs
    class="bek-border bek-shadow bek-radius bek-margin-top bek-margin-bottom bek-padding notes"
  >
    <ul>
      <li
        v-for="note in content.note"
        :key="note"
        v-html="note"
      />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  & > ul {
    list-style: lower-roman;
    list-style-position: inside;
  }
}
</style>
