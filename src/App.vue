<template>
  <navigation />
  <RouterView v-slot="{ Component }">
    <transition enter-active-class="animate__animated animate__fadeIn animate__fast">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigation from './components/navigation/navigation.vue';
</script>


