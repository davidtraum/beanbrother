<template>
  <div class="overlay" :class="{ hidden: !visible }">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author dtraum
 * @date 03.12.2021
 */
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  transition: 1000ms;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
}
</style>
