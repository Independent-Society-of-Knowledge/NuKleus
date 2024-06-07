<template>
  <div :class="{ dark: darkModeValue }" class="h-screen mx-auto p-10 dark:bg-black transition-colors duration-200">
    <nuke-button @click=" darkModeValue=!darkModeValue" > Dark Mode</nuke-button>
    <div
        class="h-full flex w-full justify-center items-center px-[16rem]  transition-colors duration-200">
<!--        <nuke-progress-bar-->
<!--            primary-color="shore"-->
<!--            secondary-color="gray"-->
<!--            size="small"-->
<!--            state="success"-->
<!--            :progress-value="progressValue"-->
<!--            :expected-value="100"-->
<!--        />-->
<!--    <nuke-loading color="info"/>-->
      <nuke-button>
        Please press me as a button
      </nuke-button>
  </div>
  </div>


</template>

<script setup lang="ts">
// import NukeProgressBar from "./components/NukeProgressBar.vue";
// import NukeLoading from "./components/NukeLoading.vue";
import {ref} from "vue";
import NukeButton from "./components/NukeButton.vue";

const darkModeValue = ref<boolean>(false);
// const progressValue = ref(40)


</script>

<style scoped></style>