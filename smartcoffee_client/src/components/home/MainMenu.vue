
<template>
  <ion-menu side="start" menu-id="main" content-id="main">
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

import DesignService from "../../service/DesignService";

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
      DesignService
    };
  },
  methods: {
      onToggleDarkmode(event: CustomEvent) {
          DesignService.setDarkMode(event.detail.checked);
      }
  }
});
</script>
