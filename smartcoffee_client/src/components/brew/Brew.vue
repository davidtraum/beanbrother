<template>
  <ion-page>
    <ion-header>
      <toolbar title="Kaffee brauen" />
    </ion-header>
    <ion-content>
      <ion-card style="max-width: 600px" class="brew-card">
        <ion-card-header>
          <ion-card-title> Neuer Kaffee </ion-card-title>
          <ion-card-subtitle> Erstelle ein neues Rezept </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="floating"> Name des Rezepts: </ion-label>
            <ion-input v-model="brewInfo.title" />
          </ion-item>
          <ion-item>
            <ion-label> Stärke </ion-label>
            <ion-range min="0" max="10" pin snaps v-model="brewInfo.strength" />
            <ion-icon
              :style="mugStyle"
              class="transition"
              :icon="cafeOutline"
              slot="end"
            />
          </ion-item>
          <ion-item>
            <ion-label> Speichern </ion-label>
            <ion-toggle v-model="brewInfo.save" />
          </ion-item>
          <ion-item>
            <ion-button
              slot="end"
              @click="startBrew()"
              :disabled="submittedBrew"
            >
              <ion-label>Kaffee brauen</ion-label>
              <ion-icon :icon="sendOutline" slot="end" />
            </ion-button>
          </ion-item>
          <ion-progress-bar
            type="indeterminate"
            class="transition"
            :class="{ hidden: !submittedBrew }"
          />
        </ion-card-content>
      </ion-card>
      <create-button />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 26.11.2021
 */
import { defineComponent, reactive, ref } from "vue";

import { menu, cafeOutline, sendOutline } from "ionicons/icons";

import {
  IonPage,
  IonHeader,
  IonIcon,
  IonContent,
  IonCard,
  IonItem,
  IonInput,
  IonRange,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonProgressBar,
  IonCardContent,
  IonToggle,
  menuController,
} from "@ionic/vue";

import CreateButton from "../generic/CreateButton.vue";
import Toolbar from "../generic/Toolbar.vue";

interface BrewInfo {
  title: string;
  strength: number;
  save: boolean;
}

export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonHeader,
    IonIcon,
    IonCard,
    IonToggle,
    IonProgressBar,
    IonCardHeader,
    IonItem,
    IonInput,
    IonRange,
    IonLabel,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    CreateButton,
    Toolbar
  },
  setup() {
    const brewInfo: BrewInfo = reactive({
      title: "",
      strength: 5,
      save: true,
    });
    return {
      brewInfo,
      submittedBrew: ref(false),
      menu,
      cafeOutline,
      sendOutline,
    };
  },
  computed: {
    mugStyle(): string {
      return `transform: scale(${
        0.5 + this.brewInfo.strength / 10
      }; color: rgb(${(this.brewInfo.strength / 10) * 255}, ${
        200 - (this.brewInfo.strength / 10) * 200
      }, ${200 - (this.brewInfo.strength / 10) * 200})`;
    },
  },
  methods: {
    openMenu() {
      menuController.open("main");
    },
    startBrew() {
      this.submittedBrew = true;
    },
  },
});
</script>
