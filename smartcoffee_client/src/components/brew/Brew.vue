<template>
  <ion-page>
    <ion-header>
      <toolbar title="Kaffee brauen" />
    </ion-header>
    <ion-content>
      <brew-new-card />
      <create-button />
      <routine-card
        v-for="(routine, index) of StorageService.data.routines"
        :key="index"
        :routine="routine"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent, ref } from "vue";

import { menu, cafeOutline, sendOutline } from "ionicons/icons";

import { IonPage, IonHeader, IonContent, menuController } from "@ionic/vue";

import CreateButton from "../generic/CreateButton.vue";
import Toolbar from "../generic/Toolbar.vue";
import BrewNewCard from "./BrewNewCard.vue";
import RoutineCard from "../routines/BrewRoutineCard.vue";
import StorageService from "../../service/StorageService";

export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    CreateButton,
    Toolbar,
    BrewNewCard,
    RoutineCard,
  },
  setup() {
    return {
      submittedBrew: ref(false),
      menu,
      cafeOutline,
      sendOutline,
      StorageService,
    };
  },
  methods: {
    openMenu() {
      menuController.open("main");
    },
  },
});
</script>
