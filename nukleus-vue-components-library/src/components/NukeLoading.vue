<template>
  <div>
    <div class="lds-grid group">
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
      <div
          class="nuke-color-attribute bg-[--nuke-color-primary-600]  group-hover:bg-[--nuke-color-primary-400]
           nuke-transition-colors
           group-hover:ease-in-out dark:bg-[--nuke-color-primary-500] dark:group-hover:bg-[--nuke-color-primary-400]"
          :nuke-color-primary="color"></div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {Color} from "../composables/useColor.ts";

const props = withDefaults(
    defineProps<{
      color: Color,

    }>(),
    {
      color: "azure"
    }
)

</script>
<style scoped>

.lds-grid,
.lds-grid div {
  box-sizing: border-box;
}

.lds-grid {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}

.lds-grid div {
  position: absolute;
  width: 4px;
  height: 4px;
  animation: lds-grid 1.2s linear infinite;
}

.lds-grid div:nth-child(1) {
  top: 2px;
  left: 2px;
  animation-delay: 0s;
}

.lds-grid div:nth-child(2) {
  top: 2px;
  left: 8px;
  animation-delay: -0.4s;
}

.lds-grid div:nth-child(3) {
  top: 2px;
  left: 14px;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(4) {
  top: 8px;
  left: 2px;
  animation-delay: -0.4s;
}

.lds-grid div:nth-child(5) {
  top: 8px;
  left: 8px;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(6) {
  top: 8px;
  left: 14px;
  animation-delay: -1.2s;
}

.lds-grid div:nth-child(7) {
  top: 14px;
  left: 2px;
  animation-delay: -0.8s;
}

.lds-grid div:nth-child(8) {
  top: 14px;
  left: 8px;
  animation-delay: -1.2s;
}

.lds-grid div:nth-child(9) {
  top: 14px;
  left: 14px;
  animation-delay: -1.6s;
}

@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
}


</style>