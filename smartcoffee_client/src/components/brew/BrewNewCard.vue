<template>
  <ion-card style="max-width: 600px" class="brew-card">
    <img
      class="loader transition"
      :class="{ hidden: !submittedBrew }"
      src="../../assets/gif/happy_alpha.gif"
    />
    <ion-progress-bar
      type="indeterminate"
      class="transition"
      :class="{ hidden: !submittedBrew }"
    />
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
        <ion-label class="ion-text-wrap"> Wassermenge (ml) </ion-label>
        <ion-range min="125" max="250" pin step="25" snaps v-model="brewInfo.strength" />
        <ion-icon
          :style="mugStyle"
          class="transition"
          :icon="cafeOutline"
          slot="end"
        />
      </ion-item>
      <ion-item lines="none">
        <ion-label> Speichern </ion-label>
        <ion-toggle slot="end" v-model="brewInfo.save" />
      </ion-item>
      <ion-item lines="none">
        <ion-button
          size="default"
          slot="end"
          @click="startBrew()"
          :disabled="submittedBrew"
        >
          <ion-label>Kaffee brauen</ion-label>
          <ion-icon :icon="colorFillOutline" slot="end" />
        </ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */

interface BrewInfo {
  title: string;
  strength: number;
  save: boolean;
}

import { defineComponent, reactive, ref } from "vue";
import { cafeOutline, sendOutline, colorFillOutline } from "ionicons/icons";

import {
  IonIcon,
  IonCard,
  IonItem,
  IonInput,
  IonRange,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCardSubtitle,
  IonProgressBar,
  IonCardContent,
  IonToggle,
  toastController
} from "@ionic/vue";

import Client from "../../lib/Client";

export default defineComponent({
  name: "BrewNewCard",
  components: {
    IonIcon,
    IonCard,
    IonItem,
    IonInput,
    IonButton,
    IonRange,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar,
    IonCardContent,
    IonToggle,
  },
  setup() {
    const brewInfo: BrewInfo = reactive({
      title: "",
      strength: 250,
      save: true,
    });
    return {
      brewInfo,
      submittedBrew: ref(false),
      cafeOutline,
      sendOutline,
      colorFillOutline,
    };
  },
  computed: {
    mugStyle(): string {
      const scaleFactor= (this.brewInfo.strength - 125) / (250 - 125);
      return `transform: scale(${
        0.5 + (scaleFactor) * 1.5
      }; color: rgb(${(scaleFactor) * 255}, ${
        200 - (scaleFactor) * 200
      }, ${200 - (scaleFactor) * 200})`;
    },
  },
  methods: {
    async startBrew() {
      const apiResponse = await Client.post(`brew`, {
        strength: this.brewInfo.strength,
        title: this.brewInfo.title
      });

      if (!apiResponse) {
        toastController.create({
          message: 'Bei der Anfrage zum Brauen ist ein unerwarteter Fehler aufgetreten'
        }).then(toast => toast.present());
      }

      this.submittedBrew = true;
      setTimeout(() => {
        this.submittedBrew = false;
      }, 4000);
    },
  },
});
</script>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 1em;
  right: 1em;
  height: 100px;
  z-index: 2;
  &.hidden {
    transform: scale(0);
  }
}
</style>
