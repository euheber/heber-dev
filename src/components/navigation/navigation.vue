<template>
    <header id="headerVueComponent">
        <nav>
            <router-link id="logo" to="/">Heber Robert</router-link>
            <ul>
                <li @click="copy">euheber1@gmail.com</li>
                <li>
                    <transition enter-active-class="animate__animated animate__fadeInDown animate__faster"
                        leave-active-class="animate__animated animate__fadeOutDown animate__faster">
                        <span v-if="handlePopUp">
                            Copiado! 📝
                        </span>
                    </transition>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let handlePopUp = ref(false)

const copy = (e) => {

    handlePopUp.value = !handlePopUp.value
    const email = e.target.textContent
    navigator.clipboard.writeText(email)

    setTimeout(() => { handlePopUp.value = !handlePopUp.value }, 1000)
}
</script>

<style  lang="scss scoped"  src="../../assets/scss/navigationComponent/navigation.scss" />

