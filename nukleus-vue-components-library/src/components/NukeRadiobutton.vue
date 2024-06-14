<template>
  <input type="radio" :value="label" v-model="model" class="hidden" v-bind="$attrs" :disabled="disabled" :label="label" />
  <div
      class="
    max-h-[24px]
    max-w-[24px]
    rounded-full
    group flex items-center justify-center text-white
    h-[--nuke-space-primary]
    w-[--nuke-space-primary]
    nuke-color-attribute
    nuke-space-attribute
    nuke-transition-colors

    data-[disabled=false]:data-[checked=false]:bg-[--nuke-color-secondary-200]
    data-[disabled=false]:data-[checked=false]:hover:bg-[--nuke-color-secondary-300]
    data-[disabled=false]:data-[checked=false]:dark:bg-[--nuke-color-secondary-900]
    data-[disabled=false]:data-[checked=false]:dark:hover:bg-[--nuke-color-secondary-800]

    data-[disabled=false]:data-[checked=true]:bg-[--nuke-color-primary-700]
    data-[disabled=false]:data-[checked=true]:hover:bg-[--nuke-color-primary-800]

    data-[disabled=true]:data-[checked=false]:bg-[--nuke-color-secondary-200]
    data-[disabled=true]:data-[checked=false]:dark:bg-[--nuke-color-secondary-800]
    data-[disabled=true]:data-[checked=true]:bg-[--nuke-color-secondary-800]
    "
      :nuke-color-primary="primaryColor"
      :nuke-color-secondary="secondaryColor"
      :nuke-space-primary="size"
      :data-checked="model === label"
      @click="checkFunction()"
      :data-disabled="disabled"
  >
    <div
        class="
      transition-opacity
      w-[64%] h-[64%]
      rounded-full
      group-data-[checked=false]:opacity-0
      group-data-[checked=true]:opacity-100

      group-data-[checked=true]:dark:bg-[--nuke-color-secondary-300]
      group-data-[checked=true]:bg-[--nuke-color-secondary-300]
      group-data-[disabled=true]:bg-[--nuke-color-secondary-900]
    "/>
  </div>
</template>

<script setup lang="ts">
import { Color } from "../composables/useColor.ts";
import { Space } from "../composables/useSize.ts";
import { ref, watch, computed } from "vue";

const props = withDefaults(
    defineProps<{
      modelValue: string;
      name: string;
      label: string;
      primaryColor: Color;
      secondaryColor: Color;
      size: Space;
      disabled: boolean;
    }>(),
    {
      disabled: false,
      size: "24px",
      secondaryColor: "gray",
      primaryColor: "azure",
    }
);

const model = ref(props.modelValue);

function checkFunction() {
  if (!props.disabled && props.modelValue !== props.label) {
      model.value = props.label;
    emitUpdate();
  }
}

function emitUpdate() {
  emit('update:modelValue', model.value);
}

watch(() => props.modelValue, (newValue) => {
  model.value = newValue;
});
</script>

<style scoped lang="scss">
/* Add any additional styles here */
</style>
