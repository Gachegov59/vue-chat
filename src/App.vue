<template lang="pug">
    #app
        PageMain
</template>

<script>
import PageMain from "@/pages/PageMain";
export default {
  name: 'App',
  components: {
      PageMain
  }
}
</script>

<style lang="scss">
@import "src/styles/style";

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
