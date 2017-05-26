<template lang="pug">
  span.v-icon(:class="alone")
    v-icon(:name="name"  v-bind:style="{width: width || '20px', height: width || '20px', transform: `rotate(${rotate || 0}deg) scale(${scaleDdata[0]},${scaleDdata[1]})`}")
    span
      slot
</template>


<script>
  export default {
    props: ['name', 'width', 'height', 'rotate', 'alone', 'scale'],
    computed: {
      scaleDdata: function () {
        return this.scale || [1, 1]
      }
    }
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

    svg {
      margin-right: 3px;
    }

    &.true {
      svg {
        margin-right: 0;
      }
    }
  }

  
</style>
