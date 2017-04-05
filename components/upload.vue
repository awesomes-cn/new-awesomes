<template lang="pug">
  div.upload-wraper
    input(type="file")
    
</template>

<script>
</script>


<style lang="scss" scoped>
  .upload-wraper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;

    input[type="file"] {
      width: 100%;
      height: 100%;
      z-index: 10;
      cursor: pointer;
      opacity: 0;
    }
  }
  

</style>
