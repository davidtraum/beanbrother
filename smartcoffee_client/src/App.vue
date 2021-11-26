<template>
  <ion-app>
    <main-menu />
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

import MainMenu from "./components/home/MainMenu.vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MainMenu
  }
});
</script>