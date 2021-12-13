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
        <ion-input v-model="routineData.title" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Beschreibung</ion-label>
        <ion-input v-model="routineData.desc" />
      </ion-item>
      <ion-item>
        <ion-label>Uhrzeit</ion-label>
        <ion-datetime
          cancel-text="Abbrechen"
          done-text="Fertig"
          display-format="HH:mm"
          v-model="dateInput"
        ></ion-datetime>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="stacked" style="font-size: 20px"
          >Wiederholen</ion-label
        >
        <div class="days">
          <div
            :class="{ checked: isChipActive(index) }"
            class="day"
            v-for="(item, index) of days"
            :key="index"
            @click="toggleChip(index)"
          >
            <span>
              {{ item }}
            </span>
          </div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <ion-button
          fill="clear"
          size="default"
          slot="end"
          color="secondary"
          @click="createRoutine()"
          >Routine erstellen</ion-button
        >
      </ion-item>
    </ion-list>
  </ion-content>
</template>
<script lang="ts">
import { defineComponent, Ref, ref, reactive } from "vue";
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
import { RoutineData } from "../../lib/RoutineData";

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
    const dateInput = ref(new Date().toISOString());
    const routineData: RoutineData = reactive({
      title: "",
      desc: "",
      alarmTime: 0,
      repeatDays: activeChips,
    });
    return {
      close,
      days,
      dateInput,
      activeChips,
      routineData,
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
    createRoutine() {
      this.routineData.alarmTime = new Date(this.dateInput).getTime();
      console.log(this.routineData);
      modalController.dismiss(this.routineData);
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
  background: rgba(191, 153, 136, 0.2);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  transition: 150ms;
  margin-right: 10px;
  border: solid 1px rgba(191, 153, 136, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    margin-left: 0 !important;
  }
  &.checked {
    background: rgba(191, 153, 136, 0);
    border: solid 1px rgba(191, 153, 136, 0.1);
  }
}
</style>