<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <ion-input placeholder="Neue Routine"> </ion-input>
      </ion-card-title>
      <ion-card-subtitle>
        <ion-input placeholder="Beschreibung"> </ion-input>
      </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label>Uhrzeit</ion-label>
        <ion-datetime display-format="HH:mm"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label>Wiederholen</ion-label>
        <ion-select
          value="12"
          placeholder="Nie"
          multiple
          cancel-text="Abbrechen"
        >
          <ion-select-option value="01">Montag</ion-select-option>
          <ion-select-option value="02">Dienstag</ion-select-option>
          <ion-select-option value="03">Mittwoch</ion-select-option>
          <ion-select-option value="04">Donnerstag</ion-select-option>
          <ion-select-option value="05">Freitag</ion-select-option>
          <ion-select-option value="06">Samstag</ion-select-option>
          <ion-select-option value="07">Sonntag</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item lines="none">
        <ion-button slot="end" fill="clear">
          <ion-icon :icon="trashOutline" color="danger" />
        </ion-button>
      </ion-item>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { checkmarkOutline, trashOutline } from "ionicons/icons";
import {
  IonIcon,
  IonCard,
  IonItem,
  IonInput,
  IonLabel,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/vue";

export default defineComponent({
  name: "Routine",
  components: {
    IonIcon,
    IonCard,
    IonItem,
    IonInput,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonButton,
    IonCardSubtitle,
    IonCardContent,
  },
  setup() {
    return {
      checkmarkOutline,
      trashOutline,
    };
  },
  // props{
  //   title:{
  //     type: String,
  //   },
  //   date:{
  //     type: Object,
  //   }
  //   time:{
  //     type: Object
  //   }
  // },
  // setup() {},
});
</script>

