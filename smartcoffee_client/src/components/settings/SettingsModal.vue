<template>
  <ion-page>
    <ion-toolbar mode="md" color="primary">
      <ion-title> Einstellungen </ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss()" slot="icon-only">
          <ion-icon :icon="close" color="danger" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-content>
      <ion-item>
        <ion-label>Speicher</ion-label>
        <ion-button color="danger" @click="clearStorage()">Leeren</ion-button>
      </ion-item>
      <ion-item>
        <ion-label>Name:</ion-label>
        <ion-input v-model="nameInput" />
        <ion-button
          @click="saveName"
          :disabled="
            nameInput.length < 2 ||
            nameInput.length > 30 ||
            nameInput === StorageService.data.name
          "
        >
          {{
            nameInput === StorageService.data.name ? "Gespeichert" : "Speichern"
          }}
        </ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */
import { defineComponent, ref } from "vue";

import { close, settings } from "ionicons/icons";
import {
  modalController,
  IonPage,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonInput,
  IonLabel,
  alertController,
} from "@ionic/vue";
import StorageService from "../../service/StorageService";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonToolbar,
    IonTitle,
    IonInput,
    IonButtons,
    IonButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return {
      close,
      settings,
      StorageService,
      nameInput: ref(StorageService.data.name),
    };
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    clearStorage() {
      alertController
        .create({
          header: "Speicher",
          message:
            "Möchtest du den gesamten Speicherinhalt löschen? (Name, Rezepte...)",
          buttons: [
            { role: "abort", text: "Abbrechen" },
            { role: "destructive", text: "Ja" },
          ],
        })
        .then((alert) => {
          alert.present().then(() => {
            alert.onDidDismiss().then((result) => {
              if (result.role === "destructive") {
                StorageService.clear();
              }
            });
          });
        });
    },
    async saveName() {
      await StorageService.setName(this.nameInput);
    },
  },
});
</script>
