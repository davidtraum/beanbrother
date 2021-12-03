<template>
  <ion-fab vertical="bottom" horizontal="end">
    <ion-fab-button v-tooltip title="Routine erstellen">
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

import { IonFab, IonFabButton, IonIcon } from "@ionic/vue";

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
});
</script>
