<template>
    <header id="headerVueComponent">
        <nav>
            <router-link id="logo" to="/">Heber Robert</router-link>
            <ul>
                <li><a href="#footer">Contato</a></li>
            </ul>
        </nav>
    </header>

</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style  lang="scss scoped"  src="../../assets/scss/navigationComponent/navigation.scss" />

