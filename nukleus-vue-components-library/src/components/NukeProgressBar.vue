<template>
  <div class="

  group
  nuke-color-attribute nuke-space-attribute
  bg-[--nuke-color-secondary-200] h-[--nuke-space-primary] w-full
  nuke-type-mono-d4-300-normal text-[--nuke-color-secondary-400]
  hover:bg-[--nuke-color-secondary-300]  hover:text-[--nuke-color-secondary-400]
  dark:bg-[--nuke-color-secondary-800] dark:text-[--nuke-color-secondary-800]
  dark:hover:bg-[--nuke-color-secondary-900] dark:hover:text-[--nuke-color-secondary-800]

"
       :nuke-color-secondary="secondaryColor"
       :nuke-space-primary="size"
       :data-state="state"
       :data-percentage="percentage"
       @mouseenter="percentageOnHover = true"
       @mouseleave="percentageOnHover = false"
  >


    <div class="
    completion-bar
    nuke-color-attribute
    bg-[--nuke-color-primary-700] h-full
    group-hover:bg-[--nuke-color-primary-600]
    dark:bg-[--nuke-color-primary-700] dark:
    dark:group-hover:bg-[--nuke-color-primary-600] dark:transition-colors
    group-data-[percentage=100]:bg-red-400
    "
         :nuke-color-primary="computedPrimaryColor"
         :style="{
        width: props.state !== 'danger' ? `${props.progressValue < props.expectedValue ? ((props.progressValue / props.expectedValue)*100).toFixed(2) : 100}%` : '100%',
        transition: 'width 0.2s ease-in-out'
         }"
    ></div>

    <div class="
    percentage-text

    w-full flex justify-end
    "
         v-if="showPercentage || (showPercentageOnHover && percentageOnHover)"
    >
      {{
        state !== "danger" && state !== "success" ? percentage : state !== "success" ? "Error" : "Done"
      }}
    </div>

  </div>
</template>
<script setup lang="ts">
import {Color} from "../composables/useColor.ts";
import {computed, ref} from "vue";
import {Space} from "../composables/useSize.ts";
import {ActionState} from "../composables/useActionState.ts";

// Props
const props = withDefaults(
    defineProps<{
      size: Space;
      progressValue: number,
      expectedValue: number,
      primaryColor: Color,
      secondaryColor: Color
      state: ActionState
      showPercentage: boolean
      showPercentageOnHover: boolean

    }>(), {
      size: "4px",
      primaryColor: "azure",
      expectedValue: 100,
      secondaryColor: "gray",
      showPercentage: false,
      showPercentageOnHover: true,
      state: "normal"
    }
)

const percentageOnHover = ref(false)

const percentage = computed(() => {
  return props.state !== "danger" ? `${props.progressValue < props.expectedValue ? ((props.progressValue / props.expectedValue) * 100).toFixed(0) : 100}%` : "100%"
})

const computedPrimaryColor = computed(() => {
  return props.state !== "danger" && props.state !== "success" ? props.primaryColor : props.state !== "success" ? "danger" : "success"
})

</script>
<style scoped lang="scss">
</style>