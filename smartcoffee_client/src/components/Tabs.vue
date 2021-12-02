<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/view/brew">
          <ion-icon :icon="cafeOutline" />
          <ion-label>Brauen</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/view/history">
          <ion-icon :icon="listOutline" />
          <ion-label>Verlauf</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/view/social">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Social</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { cafeOutline, listOutline, peopleOutline } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      cafeOutline,
      listOutline,
      peopleOutline,
    };
  },
};
</script>