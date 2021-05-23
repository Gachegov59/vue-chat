<template lang="pug">
    body
        main.chat
            AppPanel
            AppChat

</template>

<script>
import AppPanel from "@/components/AppPanel";
import AppChat from "@/components/AppChat";


export default {
    name: 'PageMain',
    components: {AppChat, AppPanel},
    data() {
        return {

        }
    },
    // methods: {
    //     showConsole(){
    //         console.log(123)
    //     }
    // }

}
</script>

<style scoped>

</style>