
<template>
  <div class="
  nuk-coloring w-fit h-fit p-4px text-white nuk-text-code-01
  nuk-transition-background-color-fast-02-standard-productive
  bg-[--nuk-primary-60] hover:bg-[--nuk-primary-70]" :nuk-color-primary="color">{{ tag }}</div>
</template>
<script setup lang="ts">
import type {Color} from "@/composables/types";

const props = withDefaults(
    defineProps<{ tag: string, color: Color }>(),
    {
      tag: "Default Tag",
      color:"azure"
    }
)
</script>

<style scoped>

</style>