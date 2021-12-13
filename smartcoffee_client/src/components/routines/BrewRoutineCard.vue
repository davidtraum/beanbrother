<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-label>{{ routine.data.title }}</ion-label>
      </ion-card-title>
      <ion-card-subtitle>
        <ion-label>{{ routine.data.desc }}</ion-label>
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>Uhrzeit</ion-label>
        <ion-datetime
          display-format="HH:mm"
          readonly
          :value="alarmTime"
        ></ion-datetime>
      </ion-item>
      <ion-item lines="none">
        <ion-label position="stacked">Wiederholen</ion-label>
        <div class="days">
          <div
            class="day"
            :class="{ checked: isChipActive(index) }"
            v-for="(item, index) of days"
            :key="index"
          >
            <span>
              {{ item }}
            </span>
          </div>
        </div>
      </ion-item>
      <ion-item lines="none">
        <ion-button slot="end" fill="clear">
          <ion-icon
            :icon="trashOutline"
            color="danger"
            @click="deleteRoutine()"
          />
        </ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { checkmarkOutline, trashOutline } from "ionicons/icons";
import StorageService from "../../service/StorageService";
import {
  IonIcon,
  IonCard,
  IonItem,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/vue";
import { RoutineData } from "@/lib/RoutineData";

export default defineComponent({
  name: "RoutineCard",
  components: {
    IonIcon,
    IonCard,
    IonItem,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonCardSubtitle,
    IonCardContent,
  },
  props: {
    routine: {
      type: Object,
      required: true,
    },
  },
  computed: {
    alarmTime(): string {
      if (this.routine) {
        return new Date(this.routine.data.alarmTime).toISOString();
      } else {
        return new Date(0).toISOString();
      }
    },
  },
  setup() {
    const days: Array<string> = ["M", "D", "M", "D", "F", "S", "S"];
    return {
      checkmarkOutline,
      trashOutline,
      days,
    };
  },
  methods: {
    isChipActive(index: number): boolean {
      if (this.routine) {
        return this.routine.data.repeatDays.includes(index);
      } else {
        return false;
      }
    },
    async deleteRoutine() {
      await StorageService.removeRoutine(this.routine.data as RoutineData);
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
  width: 28px;
  height: 28px;
  transition: 150ms;
  margin-right: 10px;
  border: solid 1px rgba(191, 153, 136, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;

  &:nth-child(1) {
    margin-left: 0 !important;
  }
  &.checked {
    background: rgba(191, 153, 136, 0);
    border: solid 1px rgba(191, 153, 136, 0.1);
  }
}
</style>

