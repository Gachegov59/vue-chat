<template lang="pug">
    div
        aside.chat__panel( v-click-outside="closePanel")
            .chat__row
                button.btn._menu(
                    @click="panelOpen = !panelOpen"
                    :class="{_open: panelOpen}"
                )
                    span
                    span
                    span
                input.chat__search(placeholder="Найти...")


            .menu(
                :class="{_open: panelOpen}"

            )
                .menu__block(
                    @click="popupAuth"
                )
                    .menu__ava
                        include ../static/camera.svg
                    .menu__wrap
                        .menu__urer-name
                        .menu__urer-exit
                            include ../static/logout.svg

                .menu__block._hide
                    //img(src=`./img/ava2.jpg`).menu__ava
                    .menu__urer-name
            AppAuth
            AppRegistration
</template>

<script>
import AppAuth from "@/components/popups/AppAuth";
import AppRegistration from "@/components/popups/AppRegistration";
import Vue from "vue"


Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});


export default {
    name: "AppPanel",
    components: {AppAuth, AppRegistration},
    data() {
        return {
            panelOpen: false
        }
    },
    methods: {
        popupAuth() {
            this.$modal.show('popupAuth')
        },
        closePanel() {
            this.panelOpen = false
        }
    },
    mounted() {
        this.$modal.show('popupRegister')
    }

}
</script>

<style scoped>

</style>