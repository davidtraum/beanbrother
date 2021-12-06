<template>
  <div>
      
      <ion-input placeholder="Titel" v-model="input.title"/>
      <ion-button @click="add()"> Hinzufügen </ion-button>

      <ion-card v-for="(entry, index) of entries" :key="index">
          <ion-card-header>
              <ion-card-title>
                  {{entry.title}}
              </ion-card-title>
          </ion-card-header>
      </ion-card>

      
  </div>
</template>

<script lang="ts">

interface CardInput {
    title: string;
}

import { defineComponent, reactive, Ref, ref } from "vue";

import { IonInput, IonCard, IonCardHeader, IonCardTitle, IonButton } from "@ionic/vue";

export default defineComponent({
  components: {
    IonInput,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButton
  },
  setup() {

      const input: CardInput = reactive({
          title: ''
      });

      const entries: Ref<CardInput[]> = ref( [] );

    return {
        input,
        entries
    };
  },
  methods: {
      add() {
          this.entries.push(this.input);
      }
  }
});
</script>
