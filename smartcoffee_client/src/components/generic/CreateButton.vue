<template>
  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button
      v-tooltip
      title="Routine erstellen"
      @click="openRoutineModal"
    >
      <ion-icon :icon="add" />
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent } from "vue";

import { add } from "ionicons/icons";

import { IonFab, IonFabButton, IonIcon, modalController } from "@ionic/vue";
import RoutineModal from "../routines/RoutineModal.vue";
import { RoutineData } from "../../lib/RoutineData";
import StorageService from "../../service/StorageService";

export default defineComponent({
  name: "CreateButton",
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    return {
      add,
    };
  },
  methods: {
    async openRoutineModal() {
      const modal = await modalController.create({
        component: RoutineModal,
      });
      await modal.present();
      const result = await modal.onDidDismiss();
      if(result.data !== undefined) {
        const data = result as RoutineData;
        if(data.title === '__demo') {
          for(let i = 0; i<10; i++) await StorageService.addRoutine(data);
        } else {
          await StorageService.addRoutine(data);
        }
      }
    },
  },
});
</script>
