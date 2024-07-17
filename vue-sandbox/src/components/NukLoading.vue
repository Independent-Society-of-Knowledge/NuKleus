<template>
  <div>
    <div class="lds-grid group">
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
      <div
          class="nuk-coloring bg-[--nuk-primary-60]  group-hover:bg-[--nuk-primary-40]
           nuk-transition-colors
           group-hover:ease-in-out dark:bg-[--nuk-primary-50] dark:group-hover:bg-[--nuk-primary-40]"
          :nuk-color-primary="color"></div>
    </div>
  </div>
</template>
<script setup lang="ts">



import type {Color} from "@/composables/types";

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