<template>
  <div class="
  rounded-full
  nuke-color-attribute
  transition-colors
  group flex items-center justify-center
  h-[16px]
  w-[16px]
  data-[checked=true]:bg-[--nuke-color-primary-700]
  data-[checked=false]:bg-[--nuke-color-secondary-300]
  data-[checked=false]:dark:bg-[--nuke-color-secondary-900]
  "
       :data-checked="computedChecked"
       :nuke-color-primary="primaryColor"
       :nuke-color-secondary="secondaryColor"

       @click="() => {
    if(model != id){
    computedChecked = !computedChecked
    model = id
    }
  }">
    <div class="rounded-full
    transition-all
    duration-200
    nuke-color-attribute
    group-data-[checked=false]:scale-0
    group-data-[checked=true]:scale-100
    h-[8px] w-[8px]
    bg-[--gray-300]
  "/>
  </div>
</template>

<script setup lang="ts">

import {Color} from "../composables/useColor.ts";
import {computed, watch} from "vue";

const model = defineModel<string>()
const emit = defineEmits(["modelValue"]);

watch(model, (newValue) => {
  emit("modelValue", newValue)
})

const props = withDefaults(
    defineProps<{
      name: string
      id: string
      value: string
      primaryColor: Color
      secondaryColor: Color
    }>(), {
      value: "",
      secondaryColor: "gray",
      primaryColor: "azure",
      checked: false

    }
)

const computedChecked = computed(()=>{
  return model.value == props.id
})
</script>

<style scoped lang="scss">
/* Add any additional styles here */
</style>
