<template>
  <div :class="$style.content">
    <slot />
  </div>
</template>

<doc>
@slot default
</doc>

<example>
@config state false
@config example false

<bekLayout>
  <!-- ... -->
  <!-- ... -->
  <bekContent #content> <!-- Content --> </bekContent>
  <!-- ... -->
</bekLayout>

</example>

<script>
export default {
  style({ className }) {
    return [
      className('content', {
        flexGrow: 1,
        maxWidth: '100%',
      }),
    ];
  },
};
</script>
