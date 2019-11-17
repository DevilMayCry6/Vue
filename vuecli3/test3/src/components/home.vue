<template>
    <div>
        <p>vue-cli3 换个页面</p>
        <router-link to="/a" class="class1">to a</router-link>&nbsp;
        <router-link to="/b">to b</router-link>
        <router-view/>
    </div>
</template>
<style>
    /* a{
        color: red;
    } */
    @import"../../public/class1.css"
</style>