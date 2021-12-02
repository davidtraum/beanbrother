
<template>
  <ion-menu side="end" menu-id="main" content-id="main">
    <ion-header>
      <ion-toolbar>
        <ion-title> Menü </ion-title>
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
      <ion-grid>
        <ion-row>
          <ion-col></ion-col>
          <ion-col>
            <ion-img
              style="width: 88px"
              :src="require('../../src/assets/LogoBlue.png')"
            ></ion-img>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
        <ion-row>
          <ion-col></ion-col>
          <ion-col>
            <ion-text style="color: #744630">
              <h2>SmartCoffee™</h2>
            </ion-text>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>
      </ion-grid>
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
  IonToggle,
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
