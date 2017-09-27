<template>
    <div class="header" style="margin-top: -70px">
        <mt-header title="">
            <mt-button icon="more" slot="left">电影</mt-button>
            <mt-button icon="search" slot="right"></mt-button>
        </mt-header>
        <mt-swipe :show-indicators="false">
            <mt-swipe-item slot="left">1</mt-swipe-item>
            <mt-swipe-item slot="center">2</mt-swipe-item>
            <mt-swipe-item slot="right">3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
 
    export default {
        name: 'header'
    };</script>