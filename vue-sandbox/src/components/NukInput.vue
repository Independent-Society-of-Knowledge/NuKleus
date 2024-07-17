
<template>
  <input
      class="
      nuk-coloring
      nuk-text-body-01
      nuk-transition-all-fast-02-standard-productive
      px-16px
      py-8px
      outline-none
      border-solid
      border-b-[1px]
      border-[--nuk-primary-70]
      border-opacity-0
      active:border-b-[4px]
      focus:border-b-[4px]


      bg-[--nuk-secondary-5]
      dark:bg-[--nuk-secondary-80]

      dark:placeholder:text-[--nuk-secondary-60]
      placeholder:text-[--nuk-secondary-30]
      placeholder:transition-colors
      placeholder:hover:text-[--nuk-secondary-80]
      dark:placeholder:hover:text-[--nuk-secondary-50]
      text-black
      dark:text-white




"
      :nuk-color-primary="color"
      nuk-color-secondary="gray"
      :type="type" :placeholder="placeholder"/>
</template>
<script setup lang="ts">

import type {Color} from "@/composables/types";

const props = withDefaults(
    defineProps<{
      color: Color
      type: string
      placeholder: string
    }>(),
    {
      color: "azure",
      type: "text",
      placeholder: "Placeholder"
    }
)


</script>

<style scoped>

</style>