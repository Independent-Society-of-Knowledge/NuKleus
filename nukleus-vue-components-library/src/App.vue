<template>

  <div :class="{ dark: darkModeValue }" class="h-screen mx-auto p-10 dark:bg-black transition-colors duration-200 flex justify-center items-center">
    <div class="w-fit h-fit p-5 bg-blue-400">
      <div
          class="nuke-space-compute bg-red-400 w-[100px] h-[100px] pt-[--nuke-space-primary-top]" nuke-space-primary-top="giant">
      </div>
    </div>
    <nuke-button @click=" darkModeValue=!darkModeValue" primary-color="azure" size="large"> Dark Mode
      <template v-slot:icon>
        <nuke-icon-moon width="100%" height="100%" />
      </template>
    </nuke-button>
  </div>


</template>

<script setup lang="ts">

import {ref} from "vue";
import NukeButton from "./components/NukeButton.vue";
import NukeIconMoon from "./components/icon-vue-components/nuke-icon-moon.vue";

const darkModeValue = ref<boolean>(false);



</script>

<style scoped></style>