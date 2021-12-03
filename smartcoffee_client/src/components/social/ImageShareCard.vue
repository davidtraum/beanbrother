<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title> Bild teilen </ion-card-title>
      <ion-card-subtitle> Teile deinen BeanBrother-Moment </ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-header class="ion-no-border">
        <template v-if="renderedImage">
          <ion-button @click="share()"><ion-icon slot="start" :icon="shareSocial" /> Bild teilen </ion-button>
          <ion-button @click="takeImage()"> <ion-icon slot="start" :icon="repeat" /> Neues Bild </ion-button>
        </template>
        <template v-else>
          <ion-button @click="takeImage()"><ion-icon slot="start" :icon="cameraOutline" /> Bild aufnehmen </ion-button>
        </template>
      </ion-header>
      <img :src="renderedImage" v-if="renderedImage" />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
/**
 * @author dtraum
 */
import { defineComponent, Ref, ref } from "vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import SharepicRenderer from "../../lib/SharepicRenderer";
import { loadingController } from "@ionic/core";
import { FileSharer } from "@byteowls/capacitor-filesharer";
import {shareSocial, cameraOutline, repeat} from "ionicons/icons";

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonHeader,
  IonCardSubtitle,
  IonButton,
  IonIcon
} from "@ionic/vue";

export default defineComponent({
  name: "ImageShareCard",
  setup() {
    const renderedImage: Ref<undefined | string> = ref(undefined);
    return {
      renderedImage,
      shareSocial,
      cameraOutline,
      repeat
    };
  },
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonHeader,
    IonIcon,
    IonButton,
  },
  methods: {
    async takeImage() {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        source: CameraSource.Prompt,
        resultType: CameraResultType.DataUrl,
        promptLabelCancel: "Abbrechen",
        promptLabelPicture: "Foto aufnehmen",
        promptLabelHeader: "Bild erstellen",
        promptLabelPhoto: "Aus Gallerie wählen"
      });
      const imageUrl = image.dataUrl;
      if (imageUrl !== undefined) {
        const loader = await loadingController.create({
          message: "Bild wird erstellt...",
        });
        await loader.present();
        const result = await SharepicRenderer.render(imageUrl);
        this.renderedImage = result !== null ? result : undefined;
        await loader.dismiss();
      }
    },
    async share() {
      if (this.renderedImage !== undefined) {
        await FileSharer.share({
          filename: "beanbrothers.png",
          base64Data: this.renderedImage.split(",")[1],
          contentType: "image/png",
        });
      }
    },
  },
});
</script>
