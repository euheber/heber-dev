<template>
    <main>
        <section class="btn-container">
            <myBtnVue @click="activeComponent = aboutMeContent">Sobre mim</myBtnVue>
            <myBtnVue @click="activeComponent = resume">Curriculo</myBtnVue>
        </section>
        <KeepAlive>
            <component :is="activeComponent" />
        </KeepAlive>

    </main>
</template>

<script setup>
import { shallowRef } from 'vue';
import aboutMeContent from '../components/about/aboutMeContent.vue';
import myBtnVue from '../components/buttons/myBtn.vue';
import resume from '../components/resume/resume.vue';
let activeComponent = shallowRef(aboutMeContent)
</script>

<style lang="scss" scoped src="../assets/scss/aboutComponent/about.scss" />

   

