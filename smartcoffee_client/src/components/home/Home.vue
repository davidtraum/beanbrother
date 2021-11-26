<template>
  <ion-page> 
      <ion-header>
          <ion-toolbar>
              <ion-buttons slot="start">
                  <ion-button @click="openMenu()">
                      <ion-icon :icon="menu" />
                  </ion-button>
              </ion-buttons>
              <ion-title>
                  SmartCoffee
              </ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-content>

      </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent } from "vue";

import {menu} from "ionicons/icons";

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonContent,
  menuController,
} from "@ionic/vue";
export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonTitle,
    IonContent,
  },
  setup() {
      return {
          menu
      }
  },
  methods: {
      openMenu() {
          menuController.open('main');
      }
  }
});
</script>
