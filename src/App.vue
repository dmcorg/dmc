<script lang="ts">
import Navbar from './components/Navbar.vue';
import WorkArea from './components/WorkArea/WorkAreaDefault.vue';

export default {
    components: {
        Navbar,
        WorkArea
    }
}
</script>

<template>
    <div class="navbar">
        <Navbar />
    </div>
    <div class="workarea">
        <WorkArea />
    </div>
</template>

<style lang="scss">
@import "./scss/App.scss";
</style>
