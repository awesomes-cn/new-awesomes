<template lang="pug">
  span.v-icon
    v-icon(:name="name"  v-bind:style="{width: width || '20px', height: width || '20px', transform: 'rotate( ' + (rotate || 0) + 'deg)'}")
    span
      slot
</template>


<script>
  export default {
    props: ['name', 'width', 'height', 'rotate']
  }
</script>

<style lang="scss">
  .v-icon {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    span {
      display: inline-block;
    }
  }

  svg {
    margin-right: 3px;
  }
</style>
