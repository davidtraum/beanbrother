<template>
    <ion-page>
        <toolbar title="Verlauf" />
    </ion-page>
</template>

<script>
/**
 * @author dtraum
 * @date 03.12.2021
 */
import {IonPage} from "@ionic/vue";

import Toolbar from "../generic/Toolbar.vue";

export default {
    name: 'History',
    components: {
        IonPage,
        Toolbar
    },
    setup() {
        return {};
    },
}
</script>