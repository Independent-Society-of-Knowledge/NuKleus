
<template>
  <div class="flex flex-row">
    <nuk-button size="small" :color="computedColor" @click="sizeRef < 6 ? sizeRef += 1 : sizeRef = 1">
      change size
    </nuk-button>
    <nuk-button size="small" :color="computedColor" @click="colorRef < 5 ? colorRef += 1: colorRef = 1">
      change color
    </nuk-button>
    <nuk-button size="small" :color="computedColor" @click="value < 100 ? value += 10: value= 0">
      change value
    </nuk-button>
    <nuk-button size="small" :color="computedColor" @click="()=>{
      darkMode = !darkMode
      console.log(darkMode)
    }">
      Toggle Dark/Light
    </nuk-button>
  </div>
  <div class="bg-white dark:bg-black flex float-start flex-col gap-4px w-screen h-screen p-[100px]" :class="{ dark: darkMode }">
    <nuk-menu-item :color="computedColor">Home</nuk-menu-item>
    <nuk-menu-item :color="computedColor">About us</nuk-menu-item>
    <nuk-menu-item :color="computedColor">A Simple menu item</nuk-menu-item>
    <nuk-menu-item :color="computedColor">Another Menu Item to look</nuk-menu-item>
    <nuk-menu-item :color="computedColor">Hi</nuk-menu-item>
    <nuk-menu-item :color="computedColor">How are you?</nuk-menu-item>
  </div>
</template>
<script setup lang="ts">
import NukButton from "@/components/NukButton.vue";
import {computed, ref} from "vue";

import NukBreadcrumb from "@/components/NukBreadcrumb.vue";
import NukLoading from "@/components/NukLoading.vue";
import NukInput from "@/components/NukInput.vue";
import NukMenuItem from "@/components/NukMenuItem.vue";
const colorRef = ref(1)


const value = ref(0)

const model = ref("1")
const computedColor = computed(() => {
  if (colorRef.value === 1) {
    console.log('azure')
    return 'azure'
  } else if (colorRef.value === 2) {
    console.log('shore')
    return 'shore'
  } else if (colorRef.value === 3) {
    console.log('ocean')
    return 'ocean'
  } else if (colorRef.value === 4) {
    console.log('gray')
    return 'gray'
  }
})

const sizeRef = ref(1)
const darkMode = ref(false)
const computedSize = computed(() => {
  if (sizeRef.value === 1) {
    console.log('sizeRef', sizeRef.value)
    console.log('small')
    return 'small'
  } else if (sizeRef.value === 2) {
    console.log('sizeRef', sizeRef.value)
    console.log('medium')
    return 'medium'
  } else if (sizeRef.value === 3) {
    console.log('sizeRef', sizeRef.value)
    console.log('large')
    return 'large'
  } else if (sizeRef.value === 4) {
    console.log('sizeRef', sizeRef.value)
    console.log('xlarge')
    return 'xlarge'
  } else if (sizeRef.value === 5) {
    console.log('sizeRef', sizeRef.value)
    console.log('max')
    return 'max'
  }
})
</script>

<style scoped>
*{
  @apply selection:bg-[--nuk-primary-70];
}
</style>
