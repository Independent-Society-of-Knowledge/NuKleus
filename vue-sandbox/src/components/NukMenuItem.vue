
<template>
  <div class="
  group
  nuk-coloring
  h-fit
  flex flex-row
  items-center
  nuk-transition-all-fast-02-standard-productive
  w-fit
  bg-[--nuk-secondary-10]
  dark:bg-[--nuk-secondary-80]
  hover:bg-[--nuk-primary-70]
  flex-start
  
  p-16px
  dark:text-white
  text-black
  hover:text-white
  active:text-white

  nuk-text-body-01
  [&[nuk-color-primary='gray]]:text-black
  dark:[&[nuk-color-primary='gray']]:text-white

  gap-4px
  hover:gap-[16px]
  active:gap-[16px]

"
       :nuk-color-primary="color"
       nuk-color-secondary="gray"
  >

    <slot name="icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="16"
           height="16" viewBox="0 0 32 32">
        <defs>
          <clipPath id="master_svg0_134_09036">
            <rect x="0" y="0" width="32" height="32" rx="0"/>
          </clipPath>
        </defs>
        <g clip-path="url(#master_svg0_134_09036)">
          <g>
            <path d="M17,15L17,8L15,8L15,15L8,15L8,17L15,17L15,24L17,24L17,17L24,17L24,15L17,15Z" fill="currentColor"
                  fill-opacity="1"/>
          </g>
          <g></g>
        </g>
      </svg>
    </slot>
    <slot name="default"/>
  </div>
</template>
<script setup lang="ts">
import type {Color} from "@/composables/types";

const props = withDefaults(
    defineProps<{
      color: Color
    }>(),
    {
      color: 'azure'
    }
)
</script>
<style scoped>

</style>