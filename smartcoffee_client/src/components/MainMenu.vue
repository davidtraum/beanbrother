
<template>
  <ion-menu side="end" menu-id="main" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title> Beanü </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label> Dunkles Design </ion-label>
          <ion-toggle
            @ionChange="onToggleDarkmode($event)"
            :checked="DesignService.status.dark"
          />
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-img
        class="watermark"
        style="width: 125px"
        :src="require('@/assets/LogoWithHeader.png')"
      ></ion-img>
      <ion-text class="version">
        <p>Version 0.0.1</p>
      </ion-text>
    </ion-footer>
  </ion-menu>
</template>

<script lang="ts">
/**
@author dtraum
@date 26.11.2021
 */

import { defineComponent } from "vue";

import {
  IonMenu,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonFooter,
  IonToggle,
  IonImg,
  IonText
} from "@ionic/vue";

import DesignService from "../service/DesignService";

export default defineComponent({
  name: "MainMenu",
  components: {
    IonMenu,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonText,
    IonFooter,
    IonImg,
    IonContent,
  },
  setup() {
    return {
      DesignService,
    };
  },
  methods: {
    onToggleDarkmode(event: CustomEvent) {
      DesignService.setDarkMode(event.detail.checked);
    },
  },
});
</script>
<style lang="scss" scoped>
.version {
  color: #4d4d4d;
  text-align: center;
}
.watermark {
  display: block;
  margin: auto;
}
</style>
