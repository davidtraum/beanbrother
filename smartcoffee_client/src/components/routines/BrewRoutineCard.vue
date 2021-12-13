<template>
  <ion-card
    class="routine-card"
    :class="{ 'routine-deleted': deleted, transition: panOffset <= 0 }"
    ref="swipeCard"
    :style="{ 'margin-left': `${panOffset + 10}px`, cursor: panOffset > 0 ? 'move' : 'default'}"
  >
  <ion-icon class="delete-indicator transition" :icon="trashOutline" color="danger" :style="{transform: `translateY(-50%) scale(${1 + (panOffset / innerWidth)})`}"/>
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
        <ion-button slot="end" fill="clear" @click="deleteRoutine()">
          <ion-icon :icon="trashOutline" color="danger" />
        </ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
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
  createGesture,
} from "@ionic/vue";
import { RoutineData } from "@/lib/RoutineData";
import {Toast} from "@capacitor/toast";

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
    innerWidth(): number {
      return window.innerWidth;
    }
  },
  mounted() {
    const gestureController = createGesture({
      el: (this.$refs.swipeCard as any).$el as Node,
      threshold: 0,
      gestureName: "swipe-delete",
      onMove: (event) => {
        if (event.deltaX > 0) {
          this.panOffset = event.deltaX;
        }
      },
      onEnd: () => {
          if (this.panOffset > window.innerWidth * 0.5) {
            this.panOffset = 0;
            this.deleteRoutine();
            gestureController.destroy();
            Toast.show({
              text: 'Routine gelöscht.',
            });
          } else {
            this.panOffset = 0;
          }
      },
    });
    gestureController.enable();
    console.log(this.$refs.swipeCard);
  },
  setup() {
    const days: Array<string> = ["M", "D", "M", "D", "F", "S", "S"];
    return {
      deleted: ref(false),
      panOffset: ref(0),
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
    deleteRoutine() {
      this.deleted = true;
      setTimeout(() => {
        StorageService.removeRoutine(this.routine as RoutineData);
      }, 500);
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
.routine-card {
  user-select: none;
  overflow: visible;
  &.routine-deleted {
    opacity: 0;
    transform: translateX(100%);
  }
}
.delete-indicator {
  position: absolute;
  left: -45px;
  top: 50%;
  font-size: 32px;
  pointer-events: none;
  &.visible {
    opacity: 1;
  }
}
</style>

