<template lang="pug">
    div
        ul
            li(v-for="(item, i) in er" ).Vue-Toastification__toast-body {{item}}
</template>

<script>
export default {
    props: {
      er:{
          type: Array
      }
    },
    name: "toastification",
    data() {
        return {
            errors: [12313, 133]
        }
    }
}
</script>

<style scoped>

</style>