<template>
  <ion-app>
    <main-menu />
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, modalController } from '@ionic/vue';
import { defineComponent } from 'vue';

import MainMenu from "./components/MainMenu.vue";
import StorageService from './service/StorageService';
import WelcomeModal from "./components/welcome/WelcomeModal.vue";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    MainMenu
  },
  mounted() {
    StorageService.get('name', 'unset').then(name => {
      if(name === 'unset') {
        modalController.create({
          component: WelcomeModal,
          backdropDismiss: false
        }).then(modal => modal.present());
      }
    });
  }
});
</script>

<style lang="scss">
.transition {
  transition: 300ms;
}
.hidden {
  opacity: 0;
}
.bg {
  background-position: center;
  background-size: cover;
}
.bg-0 {
  @extend .bg;
  background-image: url(./assets/graphic/spoons.jpg);
}
</style>
