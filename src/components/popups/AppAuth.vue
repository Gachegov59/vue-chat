<template lang="pug">
    modal(
        name="popupAuth",
        height="auto",
        adaptive=true,
        :max-width="500"
    )
        .auth.popup
            .popup__close(
                @click="$modal.hide('popupAuth')"
            )
                include ../../static/close.svg

            h1.popup__title Вход
            p.popup__text Введите логин и пароль

            form.form(@submit.prevent)
                .form__item(:class="{'_isInvalid': $v.nickName.$error, '_isValid': !$v.nickName.$invalid}")
                    input(
                        placeholder="Введите ник"
                        v-model="nickName"
                        )
                    span(v-if="$v.$error ? nameErrors : false").form__error {{nameErrors}}

                .form__item(:class="{'_isInvalid': $v.password.$error, '_isValid': !$v.password.$invalid}")
                    input(
                        placeholder="Введите пароль"
                        v-model="password"
                        )
                    span(v-if="$v.$error ? passwordErrors : false").form__error {{passwordErrors}}

                .form__btn._center
                    button(
                        @click="auth"
                        :disabled="$v.$invalid && $v.$error"

                        ).btn._uppercase._mr-10 войти

                    button.btn._wide-auto._bg-white._mr-10._uppercase
                        include ../../static/google-icon.svg
                    button.btn._wide-auto._uppercase
                        include ../../static/vk.svg

                .form__btn._center
                    button.btn._uppercase._mt-20(
                        @click="openPopupRegister"
                    ) Регистрация


</template>

<script>
/*eslint-disable */
import config from "../../../config";
import toastification from "@/components/popups/toastification";
import {validationMixin} from "vuelidate"
import {hasLowercase, hasSpecialChars, hasUppercase} from './validators'
import {required} from "vuelidate/lib/validators"

export default {
    name: "AppAuth",
    mixins:[validationMixin],
    data() {
        return {
            nickName: '',
            password: '',
        }
    },
    validations: {
        nickName: {
            required,
        },
        password: {
            required,
        },

    },
    computed: {
        nameErrors() {
            let errors = '';
            if (!this.$v.nickName.required) errors += 'Обязательно для заполенеия'
            return errors
        },
        passwordErrors() {
            let errors = '';
            if (!this.$v.password.required) errors += 'Обязательно для заполенеия'
            return errors
        },
    },
    methods: {
        openPopupRegister() {
            this.$modal.hide('popupAuth')
            this.$modal.show('popupRegister')
        },
        auth() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.axios.post(`${config.api.local}${config.endpoints.user.auth}`, {
                    username: this.nickName,
                    password: this.password
                })
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.message)
                        } else {
                            console.log(response.message)
                        }
                        console.log(response.message)
                    })
                    .catch(error => {
                        let er = []
                        error.response.data.errors.errors.forEach(e => er.push(e.msg))
                        // let er = ''
                        // error.response.data.errors.errors.forEach(e => er +=  e.msg + ` <br/> `)
                        console.dir(er)

                        const toastificationComponent = {
                            component: toastification,
                            // Props are just regular props, but these won't be reactive
                            props: {er},
                            // Listeners will listen to and execute on event emission
                            listeners: {
                                click: () => console.log("Clicked!"),
                            }
                        };
                        this.$toast.error(toastificationComponent, {});
                    })
            }

        }
    }

}
</script>

<style scoped>

</style>