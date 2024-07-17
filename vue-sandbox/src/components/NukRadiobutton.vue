<template>
  <div class="
  nuk-coloring
  nuk-transition-all
  nuk-duration-fast-02
  nuk-standard-productive
  group flex items-center justify-center
  h-16px
  w-16px
  group

  data-[checked=true]:bg-[--nuk-secondary-80]
  data-[checked=false]:bg-[--nuk-secondary-90]
  data-[checked=false]:hover:bg-[--nuk-secondary-80]
  "
       :data-checked="computedChecked"
       :nuk-color-primary="color"
       nuk-color-secondary="gray"

       @click="() => {
    if(model != id){
    computedChecked = !computedChecked
    model = id
    }
  }">
    <div class="
    nuk-coloring
    justify-center items-center
    group-data-[checked=false]:scale-0
    group-data-[checked=true]:scale-100
    h-[12px] w-[12px]
    bg-[--nuk-primary-70]
  "/>
  </div>
</template>

<script setup lang="ts">

import {computed, ref, watch} from "vue";
import type {Color} from "@/composables/types";


const model = ref<string>()
const emit = defineEmits(["modelValue"]);

watch(model, (newValue) => {
  emit("modelValue", newValue)
})

const props = withDefaults(
    defineProps<{
      name: string
      id: string
      value: string
      color: Color
    }>(), {
      value: "",
      color: "azure",
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