<template lang="pug">
    .chat__content
        .chat__name чат
            span.js-users-quantity Участников:
        .chat__history.scroll
            AppChatMessage



        form.form.chat__send(@submit.prevent)
            textarea(row="1" wrap="hard" placeholder="Введите сообщение...")
            span.chat__help shift + enter
            button.btn._size-small
                span Отправить
                include ../static/send.svg
</template>

<script>
import AppChatMessage from "@/components/AppChatMessage";
export default {
    name: "AppChat",
    components: {AppChatMessage}
}
</script>

<style scoped>

</style>