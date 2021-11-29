<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-img
          :src="require('../../../src/assets/LogoBlue.png')"
          style="width: 32px; margin-left: 10px"
          slot="start"
        ></ion-img>
        <ion-buttons slot="end">
          <ion-button @click="openMenu()">
            <ion-icon :icon="menu" />
          </ion-button>
        </ion-buttons>
        <ion-title> SmartCoffee </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <create-button />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent } from "vue";

import { menu } from "ionicons/icons";

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
  IonImg,
} from "@ionic/vue";

import CreateButton from "../generic/CreateButton.vue";

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
    CreateButton,
    IonImg,
  },
  setup() {
    return {
      menu,
    };
  },
  methods: {
    openMenu() {
      menuController.open("main");
    },
  },
});
</script>
