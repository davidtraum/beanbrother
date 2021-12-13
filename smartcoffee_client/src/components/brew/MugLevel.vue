<template>
    <ion-icon :icon="cafe" class="transition" :style="mugStyle"/>
</template>

<script lang="ts">
import {cafe} from "ionicons/icons";
import { defineComponent } from 'vue'

import {IonIcon} from "@ionic/vue";

export default defineComponent({
    name: 'MugLevel',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    components: {
        IonIcon
    },
    setup() {
        return {
            cafe
        }
    },
    computed: {
        mugStyle(): string {

        }
    }
})
</script>
