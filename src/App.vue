<script lang="ts">
import Navbar from './components/Navbar.vue';
import WorkArea from './components/WorkArea/WorkAreaDefault.vue';

export default {
    data() {
        return {
            page: 0
        }
    }
}
</script>

<template>
    <div class="home" v-if="page == 0">

    </div>
    <div class="workarea" v-else-if="page == 1">

    </div>
</template>

<style lang="scss">
@import "./scss/App.scss";
</style>
