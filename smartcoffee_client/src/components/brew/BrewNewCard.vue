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
        <ion-button slot="end" @click="startBrew()" :disabled="submittedBrew">
          <ion-label>Kaffee brauen</ion-label>
          <ion-icon :icon="sendOutline" slot="end" />
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
import { cafeOutline, sendOutline } from "ionicons/icons";

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
} from "@ionic/vue";

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
      strength: 5,
      save: true,
    });
    return { brewInfo, submittedBrew: ref(false), cafeOutline, sendOutline };
  },
  computed: {
    mugStyle(): string {
      return `transform: scale(${
        0.5 + (this.brewInfo.strength / 10) * 1.5
      }; color: rgb(${(this.brewInfo.strength / 10) * 255}, ${
        200 - (this.brewInfo.strength / 10) * 200
      }, ${200 - (this.brewInfo.strength / 10) * 200})`;
    },
  },
  methods: {
    startBrew() {
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
