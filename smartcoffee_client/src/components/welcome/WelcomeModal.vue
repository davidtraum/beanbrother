<template>
  <ion-page>
    <div class="ion-padding welcome" />
    <div class="content">
      <img style="max-width: 300px" src="../../assets/graphic/shop.png" />
    </div>
    <div class="content">
      <h1>Wilkommen!</h1>
    </div>
    <div class="content">
      <p>Wie ist dein Name?</p>
    </div>
    <div class="content">
      <ion-item>
        <ion-label position="floating"> Name: </ion-label>
        <ion-input @keydown.enter="submit()" class="ion-border" v-model="name">
        </ion-input>
      </ion-item>
    </div>
    <br />
    <div class="content">
      <ion-button @click="submit()" :disabled="!inputValid">
        BeanBrother werden!
      </ion-button>
    </div>
  </ion-page>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */

import { modalController } from "@ionic/core";
import { defineComponent } from "vue";
import StorageService from "../../service/StorageService";

import { IonPage, IonItem, IonLabel, IonInput, IonButton } from "@ionic/vue";

export default defineComponent({
  data: () => ({
    name: "",
  }),
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  computed: {
    inputValid(): boolean {
      console.log(this.name);
      return this.name.length > 2 && this.name.length < 30;
    },
  },
  methods: {
    submit() {
      if (this.inputValid) {
        StorageService.setName(this.name);
        modalController.dismiss();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  justify-content: center;
}
</style>
