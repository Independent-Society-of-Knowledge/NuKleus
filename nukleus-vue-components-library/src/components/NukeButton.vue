<template>
  <button class="

    nuke-color-compute
    nuke-space-compute
    pt-[--nuke-space-primary-top]
    pb-[--nuke-space-primary-bottom]
    pl-[--nuke-space-primary-left]
    pr-[--nuke-space-primary-right]
    "
          :class="{'nuke-button-normal': type === 'normal', 'nuke-button-bordered': type === 'bordered'}"
          :nuke-color-primary="primaryColor"

          :nuke-space-primary-top="computedButtonSizes.top"
          :nuke-space-primary-bottom="computedButtonSizes.bottom"
          :nuke-space-primary-right="computedButtonSizes.right"
          :nuke-space-primary-left="computedButtonSizes.left"

  >
    <div class="min-w-0">
      <slot name="default"/>
    </div>
    <div class="h-[18px] w-[18px] ">
      <slot name="icon"/>
    </div>

  </button>
</template>
<script setup lang="ts">
import {Color} from "../composables/useColor.ts";
import {Place, Space} from "../composables/useSize.ts";
import {computed} from "vue";

const props = withDefaults(
    defineProps<{
      primaryColor: Color
      size: Space
      type: "normal" | "bordered"

    }>(),
    {
      primaryColor: "gray",
      size: "regular",
      type: "normal"
    }
)

const computedButtonSizes : Place = computed(()=> {
  if (props.size != "large" || props.size != "larger" || props.size != "giant")  {
    return {
      top: props.size,
      bottom: props.size,
      left: props.size,
      right: props.size,
    }
  }
  else {
    return {
      top: "regular",
      left: "regular",
      right: "regular",
      bottom: props.size
    }
  }
})

</script>


<style scoped>
.nuke-button-normal{
  @apply
  text-white flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans
  bg-[--nuke-color-primary-800]
  hover:bg-[--nuke-color-primary-700]
  active:bg-[--nuke-color-primary-800]

  dark:bg-[--nuke-color-primary-700]
  dark:hover:bg-[--nuke-color-primary-600]
  dark:active:bg-[--nuke-color-primary-700];
}
.nuke-button-bordered{
  @apply
  text-[--nuke-color-primary-800] flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans
  px-[16px] border-[2px]
  border-[--nuke-color-primary-800]
  hover:border-[--nuke-color-primary-700] hover:text-[--nuke-color-primary-700]
  active:border-[--nuke-color-primary-800] active:text-[--nuke-color-primary-800]

  dark:border-[--nuke-color-primary-400] dark:text-[--nuke-color-primary-400]
  dark:hover:border-[--nuke-color-primary-300] dark:hover:text-[--nuke-color-primary-300]
  dark:active:border-[--nuke-color-primary-400] dark:active:text-[--nuke-color-primary-400];
}

</style>