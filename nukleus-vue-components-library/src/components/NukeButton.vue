<template>
  <button class="
    nuke-button-padding
    "
          :class="{'nuke-button-normal': type === 'normal', 'nuke-button-bordered': type === 'bordered'}"
          :nuke-primary="primaryColor">
    <div class="min-w-0">
      <slot name="default"/>
    </div>
    <div class="h-[16px] w-[16px] ">
      <slot name="icon"/>
    </div>

  </button>
</template>
<script setup lang="ts">
import {Color} from "../composables/useColor.ts";
import {computed} from "vue";
import {Size} from "../composables/useSize.ts";

const props = withDefaults(
    defineProps<{
      primaryColor: Color
      size: Size
      type: "normal" | "bordered"

    }>(),
    {
      primaryColor: "azure",
      size: "regular",
      type: "normal"
    }
)

const computedTopPadding = computed(() => {
  switch (props.size) {
    case "xxsmall":
      return "2px";
    case "xsmall":
      return "4px";
    case "small":
      return "8px";
    case "regular":
      return "16px";
    case "medium":
      return "16px";
    case "large":
      return "16px";
    case "xlarge":
      return "16px";
    case "xxlarge":
      return "16px"
  }
})

const computedBottomPadding = computed(() => {
  switch (props.size) {
    case "xxsmall":
      return "2px";
    case "xsmall":
      return "4px";
    case "small":
      return "8px";
    case "regular":
      return "16px";
    case "medium":
      return "24px";
    case "large":
      return "32px";
    case "xlarge":
      return "64px";
    case "xxlarge":
      return "80px"

  }
})


</script>


<style scoped>
.nuke-button-normal{
  @apply
  nuke-color-compute
  text-white flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans
  px-[16px]
  bg-[--primary-800]
  hover:bg-[--primary-700]
  active:bg-[--primary-800]

  dark:bg-[--primary-700]
  dark:hover:bg-[--primary-600]
  dark:active:bg-[--primary-700];
}
.nuke-button-bordered{
  @apply
  nuke-color-compute
  text-[--primary-800] flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans
  px-[16px] border-[2px]
  border-[--primary-800]
  hover:border-[--primary-700] hover:text-[--primary-700]
  active:border-[--primary-800] active:text-[--primary-800]

  dark:border-[--primary-400] dark:text-[--primary-400]
  dark:hover:border-[--primary-300] dark:hover:text-[--primary-300]
  dark:active:border-[--primary-400] dark:active:text-[--primary-400];
}
.nuke-button-padding{
  padding-top: v-bind(computedTopPadding);
  padding-bottom: v-bind(computedBottomPadding);
}
</style>