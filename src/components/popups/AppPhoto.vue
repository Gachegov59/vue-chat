<template lang="pug">
    .photo.popup.js-popup-photo(data-action='true')
        .popup__close.js-close
            include ../img/close.svg

        h1.popup__title Авторизация
        p.popup__text Введите пожалуйста своё фио и ник для дальнейшей авторизации
        form.form
            .form__btn._center
                button.btn._uppercase._mt-40 ОТМЕНА
            .form__btn._center
                button.btn._uppercase._mt-40 СОХРАНИТЬ
</template>

<script>
export default {
name: "AppPhoto"
}
</script>

<style scoped>

</style>