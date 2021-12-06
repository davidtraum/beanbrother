<template>
  <ion-page>
    <toolbar title="Social" />
    <ion-content>
      <div style="display: flex;">
        <img src="@/assets/graphic/shop.png" style="max-width: 300px; align-self: center;" />
      </div>
      <image-share-card />
      <ion-card>
        <ion-card-header>
          <ion-card-title> Finde deine Bean-Brothers! </ion-card-title>
          <ion-card-subtitle>#beanbrother</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div
            class="embedsocial-hashtag"
            data-ref="5cb3d3cede3c093162d516ebea4835f168081694"
          ></div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
/**
 * @author dtraum
 * @date 03.12.2021
 */
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import Toolbar from "../generic/Toolbar.vue";
import ImageShareCard from "./ImageShareCard.vue";

export default {
  name: "Social",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    Toolbar,
    ImageShareCard,
  },
  setup() {
    return {};
  },
  mounted() {
    (function (d, s, id) {
      let js = "";
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  },
};
</script>

<style lang="scss" scoped>
.embedsocial-hashtag {
  width: 500vw;
  height: 120vw;
  transform: scale(0.17);
  transform-origin: top left;
}
</style>