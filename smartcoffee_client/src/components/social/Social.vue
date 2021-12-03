<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Social </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div style="display: flex; justify-content: center">
        <img src="../../assets/graphic/shop.jpg" style="max-width: 300px" />
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
  IonHeader,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/vue";

export default {
  name: "Social",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  setup() {
    return {};
  },
};
</script>