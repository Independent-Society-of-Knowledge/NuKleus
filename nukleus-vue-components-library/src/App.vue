<template>
  <div :class="{ dark: darkModeValue }" class="h-screen mx-auto p-10 dark:bg-black transition-colors duration-200">
    <nuke-button @click=" darkModeValue=!darkModeValue" > Dark Mode
    <template v-slot:icon>
      <nuke-icon-moon width="100%" height="100%" color="white"/>
    </template>
    </nuke-button>
    <div
        class="h-full flex flex-col gap-14 w-full justify-center items-center px-[16rem]  transition-colors duration-200">
        <nuke-progress-bar
            primary-color="azure"
            secondary-color="gray"
            size="small"
            state="none"
            :progress-value="progressValue"
            :expected-value="100"
        />
    <nuke-loading color="azure"   />
      <nuke-button>
        Please press me as a button
      </nuke-button>
  </div>
  </div>


</template>

<script setup lang="ts">
import NukeProgressBar from "./components/NukeProgressBar.vue";
import NukeLoading from "./components/NukeLoading.vue";
import {ref} from "vue";
import NukeButton from "./components/NukeButton.vue";
import NukeIconMoon from "./components/icon-vue-components/nuke-icon-moon.vue";

const darkModeValue = ref<boolean>(false);
const progressValue = ref(40)


</script>

<style scoped></style>