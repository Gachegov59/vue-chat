<template lang="pug">
    modal(
        name="popupRegister",
        height="auto",
        adaptive=true,
        :max-width="500"
    )
        .auth.popup
            .popup__close(
                @click="$modal.hide('popupAuth')"
            )
                include ../../static/close.svg
            .auth__icon
                img(src="../../static/logo.svg")
            h1.popup__title Регистрация
            p.popup__text Введите логин и пароль

            form.form(@submit.prevent novalidate)
                .form__item
                    input(
                        placeholder="Введите ФИО"
                    )

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

                .form__item(:class="{'_isInvalid': $v.passwordConfirm.$error, '_isValid': !$v.passwordConfirm.$invalid}")
                    input(
                        placeholder="Подвердите пароль"
                        v-model="passwordConfirm"
                    )
                    span(v-if="$v.$error ? passwordErrors : false").form__error {{passwordErrors}}

                .form__btn._center
                    button.btn._uppercase._mt-20(
                        @click="registration"
                        :disabled="$v.$invalid && $v.$error"
                    ) Регистрация

</template>

<script>
/*eslint-disable */
import config from "../../../config";
import toastification from "@/components/popups/toastification";
import {validationMixin} from "vuelidate"
import {hasLowercase, hasSpecialChars, hasUppercase} from './validators'
import {required, minLength, sameAs} from "vuelidate/lib/validators"

export default {
    name: "AppRegister",
    mixins: [validationMixin],
    data() {
        return {
            name: '',
            nickName: '',
            password: '',
            passwordConfirm: ''
        }
    },
    validations: {
        nickName: {
            required,
            minLength: minLength(4)
        },
        password: {
            required,
            sameAs: sameAs('passwordConfirm'),
            minLength: minLength(4)
            // hasUppercase,
            // hasLowercase,
            // hasSpecialChars
        },
        passwordConfirm: {
            required,
            sameAs: sameAs('password'),
            minLength: minLength(4)
        }
    },
    computed: {
        nameErrors() {
            let errors = '';
            if (!this.$v.nickName.required) errors += 'Обязательно для заполенеия'
            if (!this.$v.nickName.minLength) errors += 'Не меньше 4 букв'
            return errors
        },
        passwordErrors() {
            let errors = '';
            if (!this.$v.password.required) errors += 'Обязательно для заполенеия'
            if (!this.$v.password.minLength) errors += 'Не меньше 4 букв'
            // if (!this.$v.password.hasUppercase) errors += 'Должен содержать буквы в верхнем регистре'
            // if (!this.$v.password.hasLowercase) errors += 'Должен содержать буквы в нижнем регистре'
            // if (!this.$v.password.hasSpecialChars) errors += 'Должен содержать символ'
            if (!this.$v.password.sameAs) errors += 'Пароли не совпадают'
            return errors
        },
        // passwordConfirmErrors() {
        //     let errors = '';
        //     if (!this.$v.passwordConfirm.required) errors += 'Обязательно для заполенеия'
        //     if (!this.$v.password.sameAs) errors += 'Пароли не совпадают'
        //     return errors
        // }
    },
    methods: {
        registration() {
            this.$v.$touch()

            if (!this.$v.$invalid) {
                this.axios.post(`${config.api.local}${config.endpoints.user.registration}`, {
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