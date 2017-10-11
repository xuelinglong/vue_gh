<template>
    <div class="header" style="margin-top: -70px">
        <mt-header title="">
            <mt-button icon="" slot="left" @click="gotoTab">电影</mt-button>
            <mt-button icon="search" slot="right" @click="gotoSearch"></mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: 'header',
        methods: {
            gotoSearch() {
                this.$router.push({ name: 'search' });
            },
            gotoTab() {
                this.$router.push({ name: 'Tab' });
            }
        }
    };</script>