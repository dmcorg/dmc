<script lang="ts">
import { defineComponent, ref } from 'vue';
import CreateForm from './Form.vue';

export default defineComponent({
    components: {
        CreateForm
    },

    data() {
        return {
            page: 1
        };
    },
});
</script>

<template>
    <CreateForm/>
</template>

<style lang="scss">
@import "../../scss/Form.scss";
@import "../../scss/Button.scss";
</style>