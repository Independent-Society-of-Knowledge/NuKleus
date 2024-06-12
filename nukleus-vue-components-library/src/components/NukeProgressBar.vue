<template>
  <div class="
  progress-bar
  group h-[--nuke-space-primary]
  nuke-transition-colors nuke-space-compute
  nuke-color-compute  bg-[--nuke-color-secondary-200] w-full font-plex-mono text-[11pt] text-[--nuke-color-secondary-400]
  hover:bg-[--nuke-color-secondary-300]  hover:text-[--nuke-color-secondary-400]
  dark:bg-[--nuke-color-secondary-800] dark:text-[--nuke-color-secondary-800]
  dark:hover:bg-[--nuke-color-secondary-900] dark:hover:text-[--nuke-color-secondary-800]

  "
       :nuke-color-secondary="secondaryColor"
       :nuke-space-primary="size"
       @mouseenter="percentageOnHover = true"
       @mouseleave="percentageOnHover = false"
  >


    <div class="
    completion-bar
    nuke-color-compute
    bg-[--nuke-color-primary-700] h-full
    group-hover:bg-[--nuke-color-primary-600]
    dark:bg-[--nuke-color-primary-700] dark:
    dark:group-hover:bg-[--nuke-color-  primary-600] dark:transition-colors

" :nuke-color-primary="primaryColorValueHolder"></div>

    <div class="
    percentage-text
    color-compute
    w-full flex justify-end
    "
         v-if="showPercentage || (showPercentageOnHover && percentageOnHover)"
    >
      {{
        isNone(state) || isWarning(state) || isLoading(state) ? computedPercentage :
            isDanger(state) ? "Error" : isSuccess(state) ? "100%" : computedPercentage
      }}
    </div>

  </div>
</template>
<script setup lang="ts">
import {Color} from "../composables/useColor.ts";
import {computed, ref} from "vue";
import {
  ActionState,
  isLoading,
  isNone,
  isSuccess,
  isWarning,
  isDanger,
  isNotDone
} from "../composables/useActionState.ts";
import {Space} from "../composables/useSize.ts";


// Props
const props = withDefaults(
    defineProps<{
      size: Space;
      expectedValue: number,
      progressValue: number,
      primaryColor: Color,
      secondaryColor: Color
      state: ActionState
      showPercentage: boolean
      showPercentageOnHover: boolean

    }>(), {
      size: "regular",
      expectedValue: 100,
      primaryColor: "azure",
      secondaryColor: "gray",
      showPercentage: false,
      showPercentageOnHover: true
    }
)

const progressValueHolder = computed(() => {
  if (isNotDone(props.state)) {
    return props.progressValue
  } else {
    return props.expectedValue
  }
})

const primaryColorValueHolder = computed(() => {
  if (isNone(props.state) || isLoading(props.state)) {
    return props.primaryColor
  } else {
    return props.state
  }
})

const percentageOnHover = ref<boolean>(false)

const computedPercentage = computed(() => {
  return `${((progressValueHolder.value / props.expectedValue) * 100).toFixed(0)}%`
})

</script>
<style scoped lang="scss">
.progress-bar {
  .completion-bar {
    transition: width 0.3s ease-in;
    width: v-bind(computedPercentage);
  }
}

</style>