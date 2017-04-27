<template lang="pug">
  span.v-icon
    v-icon(:name="name"  v-bind:style="{width: width || '20px', height: width || '20px'}")
    span
      slot
</template>


<script>
  export default {
    props: ['name', 'width', 'height']
  }
</script>

<style lang="scss">
  .v-icon {
    display: flex;
    align-items: center;

    span {
      display: inline-block;
    }
  }

  svg {
    margin-right: 3px;
  }
</style>
