<template>
  <ion-page>
    <div class="ion-padding welcome">
      <div style="display: flex; flex-direction: column;">
        <img style="max-width: 200px; align-self: center;" src="../../assets/LogoBlue.png" />
      </div>
      <br />
      <div>
        <div class="content">
          <h1>Wilkommen!</h1>
        </div>
        <div class="content">
          <p>Wie ist dein Name?</p>
        </div>
        <div class="content">
          <ion-item>
            <ion-label position="floating"> Name: </ion-label>
            <ion-input
              id="name-input"
              @keydown.enter="submit()"
              class="ion-border"
              v-model="name"
            >
            </ion-input>
          </ion-item>
        </div>
        <br />
        <div class="content">
          <ion-button @click="submit()" :disabled="!inputValid">
            BeanBrother werden!
          </ion-button>
        </div>
      </div>
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
  .background {
    background-image: url(../../assets/graphic/spoons.jpg);
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 70%,
      black 100%
    );
  }
}
.content {
  display: flex;
  justify-content: center;
}
</style>
