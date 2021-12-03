<template>
  <ion-page>
    <toolbar title="Social" />
    <ion-content>
        <div style="display: flex; justify-content: center">
          <img src="@/assets/graphic/shop.jpg" style="max-width: 300px" />
        </div>
        <ion-card>
          <ion-card-header>
            <ion-card-title> Finde deine Bean-Brothers! </ion-card-title>
            <ion-card-subtitle>Und Bean-Sisters!</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
/**
 * @author dtraum
 * @date 03.12.2021
 */
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

import Toolbar from "../generic/Toolbar.vue";

export default {
  name: "Social",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    Toolbar
  },
  setup() {
    return {};
  },
};
</script>