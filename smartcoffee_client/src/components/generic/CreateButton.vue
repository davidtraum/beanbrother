<template>
  <ion-fab vertical="bottom" horizontal="end">
    <ion-fab-button v-tooltip title="Kaffe brauen">
      <ion-icon :icon="cafeOutline" />
    </ion-fab-button>

    <ion-fab-list side="start">
      <ion-fab-button v-tooltip title="Routinen">
        <ion-icon :icon="list" />
      </ion-fab-button>
      <ion-fab-button color="success" v-tooltip title="Routine erstellen">
        <ion-icon :icon="add" />
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent } from "vue";

import { cafeOutline, add, list } from "ionicons/icons";

import { IonFab, IonFabButton, IonIcon, IonFabList } from "@ionic/vue";

export default defineComponent({
  name: "CreateButton",
  components: {
    IonFab,
    IonFabButton,
    IonIcon,
    IonFabList,
  },
  setup() {
    return {
      cafeOutline,
      add,
      list,
    };
  },
});
</script>
