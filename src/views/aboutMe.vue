<template>
    <main>
        <section class="btn-container">
            <myBtnVue @click="activeComponent = aboutMeContent">Sobre mim</myBtnVue>
            <myBtnVue @click="activeComponent = resume">Curriculo</myBtnVue>
        </section>

        <transition enter-active-class="animate__animated animate__fadeIn animate__fast" 
            leave-active-class="animate__animated animate__fadeOut animate__fast" mode="out-in">
            <KeepAlive>
                <component :is="activeComponent" />
            </KeepAlive>
        </transition>
    </main>
</template>

<script setup>
import aboutMeContent from '../components/about/aboutMeContent.vue';
import myBtnVue from '../components/buttons/myBtn.vue';
import resume from '../components/resume/resume.vue';
import { shallowRef } from 'vue';

let activeComponent = shallowRef(aboutMeContent)
</script>

<style lang="scss" scoped src="../assets/scss/aboutView/about.scss" />