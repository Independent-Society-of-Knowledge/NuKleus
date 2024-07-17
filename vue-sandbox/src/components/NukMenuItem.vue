
<template>
  <div class="
  nuk-coloring

"
       :nuk-color-primary="color"
  >
    <slot name="icon"/>
    <slot name="default"/>
  </div>
</template>
<script setup lang="ts">
import type {Color} from "@/composables/types";

const props = withDefaults(
    defineProps<{
      color: Color
    }>(),
    {}
)
</script>
<style scoped>

</style>