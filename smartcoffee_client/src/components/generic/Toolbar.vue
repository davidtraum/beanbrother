<template>
  <ion-toolbar mode="md">
    <ion-img
      :src="require('@/assets/LogoBlue.png')"
      style="width: 32px; margin-left: 10px"
      slot="start"
    ></ion-img>
    <ion-title> {{ title }} </ion-title>
    <ion-buttons slot="end">
      <ion-button @click="openMenu()">
        <ion-icon :icon="menuOutline" />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */
import { menuOutline } from "ionicons/icons";
import { menuController } from "@ionic/core";
import { defineComponent } from "vue";

import {
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonImg
} from "@ionic/vue";

export default defineComponent({
  name: "Toolbar",
  props: {
    title: {
      type: String,
    },
  },
  components: {
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
    IonTitle,
    IonImg
  },
  setup() {
    return { menuOutline };
  },
  methods: {
    openMenu() {
      menuController.open("main");
    },
  },
});
</script>
