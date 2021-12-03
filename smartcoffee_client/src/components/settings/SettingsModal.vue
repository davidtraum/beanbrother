<template>
  <ion-page>
    <ion-toolbar mode="md">
      <ion-title> Einstellungen </ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismiss()" slot="icon-only">
          <ion-icon :icon="close" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
    <ion-content>
      <ion-item>
        <ion-label>Speicher</ion-label>
        <ion-button color="danger" @click="clearStorage()">Leeren</ion-button>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */
import { defineComponent } from "vue";

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
    IonButtons,
    IonButton,
    IonIcon,
    IonLabel,
  },
  setup() {
    return { close, settings };
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    clearStorage() {
        alertController.create({
            header: 'Speicher',
            message: 'Möchtest du den gesamten Speicherinhalt löschen?',
            buttons: [
                {role: 'abort', text: 'Abbrechen'},
                {role: 'destructive', text: 'Ja'}
            ]
        }).then(alert => {
            alert.present().then(() => {
                alert.onDidDismiss().then(result => {
                    if(result.role === 'destructive') {
                        StorageService.clear();
                    }
                });
            });
        })
    }
  },
});
</script>
