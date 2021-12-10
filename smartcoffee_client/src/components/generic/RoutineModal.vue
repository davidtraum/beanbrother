<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Routine erstellen</ion-title>
      <ion-button
        @click="dismissModal()"
        fill="clear"
        slot="end"
        size="default"
      >
        <ion-icon :icon="close" color="danger" />
      </ion-button>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-list>
      <ion-item>
        <ion-label position="floating">Titel</ion-label>
        <ion-input />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-input />
      </ion-item>
      <ion-item>
        <ion-label>Uhrzeit</ion-label>
        <ion-datetime
          cancel-text="Abbrechen"
          done-text="Fertig"
          display-format="HH:mm"
        ></ion-datetime>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="stacked" style="font-size: 20px"
          >Wiederholen</ion-label
        >
        <div class="days">
          <ion-chip
            class="day"
            color="secondary"
            v-for="(item, index) of days"
            :key="index"
            @click="toggleChip(index)"
            :outline="isChipActive(index)"
          >
            {{ item }}
          </ion-chip>
        </div>
        <!--
        <p style="display: flex">
          <ion-chip
            color="primary"
            style="margin-left: 0px"
            :outline="activeChip"
            >M</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >D</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >M</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >D</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >F</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >S</ion-chip
          >
          <ion-chip color="primary" @click="activateChip" :outline="activeChip"
            >S</ion-chip
          >
        </p>
        -->
        <!-- <ion-select
          value="12"
          placeholder="Nie"
          multiple
          cancel-text="Abbrechen"
        >
          <ion-select-option value="01">Mo</ion-select-option>
          <ion-select-option value="02">Di</ion-select-option>
          <ion-select-option value="03">Mi</ion-select-option>
          <ion-select-option value="04">Do</ion-select-option>
          <ion-select-option value="05">Fr</ion-select-option>
          <ion-select-option value="06">Sa</ion-select-option>
          <ion-select-option value="07">So</ion-select-option>
        </ion-select> -->
      </ion-item>
      <ion-item lines="none">
        <ion-button fill="clear" size="default" slot="end" color="secondary"
          >Routine erstellen</ion-button
        >
      </ion-item>
    </ion-list>
  </ion-content>
  <!-- <ion-footer ref="footer" class="ion-no-border createRoutine">
    <ion-item>
      <ion-button fill="clear" size="default" slot="end"
        >Routine erstellen</ion-button
      >
    </ion-item>
  </ion-footer> -->
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  modalController,
  // IonFooter,
} from "@ionic/vue";
import { close } from "ionicons/icons";

export default defineComponent({
  name: "RoutineModal",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    // IonFooter,
  },
  setup() {
    const activeChips: Ref<Array<number>> = ref([]);
    const days: Array<string> = ["M", "D", "M", "D", "F", "S", "S"];
    return {
      close,
      days,
      activeChips,
    };
  },
  methods: {
    dismissModal() {
      modalController.dismiss();
    },
    toggleChip(index: number) {
      if (this.isChipActive(index)) {
        this.activeChips.splice(this.activeChips.indexOf(index), 1);
      } else {
        this.activeChips.push(index);
      }
      console.log("Index", index, "Liste", this.activeChips);
    },
    isChipActive(index: number): boolean {
      return this.activeChips.includes(index);
    },
  },
});
</script>

<style lang="scss" scoped>
.days {
  display: flex;
  justify-content: center;
  padding-top: 1em;
  margin: 0;
}
.day {
  &:nth-child(1) {
    margin-left: 0 !important;
  }
}
</style>