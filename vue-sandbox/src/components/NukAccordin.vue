<template>
  <div class="flex flex-col w-full h-full nuk-transition-height-fast-01 group">
    <div class="
  flex flex-row w-full h-fit text-black dark:text-white
  bg-[--nuk-gray-10] dark:bg-[--nuk-gray-80] p-16px


  hover:bg-[--nuk-gray-20] dark:hover:bg-[--nuk-gray-90]
  justify-between items-center nuk-text-body-01
  " @click="state = !state" :data-state="state">
      <span>{{ header }}</span>
      <div class="data-[state=true]:rotate-180 nuk-transition-all-fast-02-standard-productive " :data-state="state">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
             width="16" height="16" viewBox="0 0 10 6">
          <defs>
            <clipPath id="master_svg0_134_05403">
              <rect x="0" y="0" width="16" height="16" rx="0"/>
            </clipPath>
          </defs>
          <g clip-path="url(#master_svg0_134_05403)">
            <g>
              <path
                  d="M5,6.000000011920929L0,1.000000011920929L0.7,0.30000001192092896L5,4.600000011920929L9.3,0.30000001192092896L10,1.000000011920929L5,6.000000011920929Z"
                  fill="currentColor" fill-opacity="1"/>
            </g>
            <g></g>
          </g>
        </svg>
      </div>
    </div>
    <div class="
      data-[state=true]:scale-y-100
      data-[state=false]:scale-y-0
      transition-transform
      bg-[--nuk-gray-5] dark:bg-[--nuk-gray-80] text-black dark:text-white
      origin-top
      w-full h-fit bg-red-400 nuk-transition-all-fast-02-standard-productive p-16px
" :data-state="state">
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const state = ref(false)
const props = withDefaults(
    defineProps<{
      header: string
    }>(),
    {}
)
</script>

<style scoped>

</style>