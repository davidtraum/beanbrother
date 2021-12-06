<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Routine erstellen</ion-title>
      <ion-button @click="dismissModal()" fill="clear" slot="end">
        <ion-icon :icon="close" color="danger" />
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
      <ion-item>
        <ion-input placeholder="Titel" />
      </ion-item>
      <ion-item>
        <ion-input placeholder="Beschreibung" />
      </ion-item>
      <ion-item>
        <ion-label>Uhrzeit</ion-label>
        <ion-datetime display-format="HH:mm"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Wiederholen</ion-label>
        <ion-select
          value="12"
          placeholder="Nie"
          multiple
          cancel-text="Abbrechen"
        >
          <ion-select-option value="01">Montag</ion-select-option>
          <ion-select-option value="02">Dienstag</ion-select-option>
          <ion-select-option value="03">Mittwoch</ion-select-option>
          <ion-select-option value="04">Donnerstag</ion-select-option>
          <ion-select-option value="05">Freitag</ion-select-option>
          <ion-select-option value="06">Samstag</ion-select-option>
          <ion-select-option value="07">Sonntag</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item lines="none">
        <ion-button slot="end" fill="clear" size="default"
          >Routine erstellen</ion-button
        >
      </ion-item>
    </ion-list>
  </ion-content>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  modalController,
} from "@ionic/vue";
import { close } from "ionicons/icons";

export default defineComponent({
  name: "RoutineModal",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
  },
  setup() {
    return {
      close,
    };
  },
  methods: {
    dismissModal() {
      modalController.dismiss();
    },
  },
});
</script>
