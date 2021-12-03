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
    <ion-content> </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */
import { defineComponent } from 'vue'

import {close, settings} from "ionicons/icons";
import { modalController } from '@ionic/core';

export default defineComponent({
    setup() {
        return {close, settings};
    },
    methods: {
        dismiss() {
            modalController.dismiss();
        }
    }
})
</script>
