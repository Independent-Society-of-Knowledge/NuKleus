<!--
* Nukleus: A design system for knowledge (vue-components-library)
*
* Copyright © 2024 Independent Society of Knowledge
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 2 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*
* Contact Information:
* Independent Society of Knowledge
* Email: projects@iskportal.com
*
* SPDX-License-Identifier: GPL-2.0-or-later
!-->

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

    <nuke-progress-bar state="none" :progress-value="30"/>
  </div>


</template>

<script setup lang="ts">

import {ref} from "vue";
import NukeButton from "./components/NukeButton.vue";
import NukeIconMoon from "./components/icon-vue-components/nuke-icon-moon.vue";
import NukeProgressBar from "./components/NukeProgressBar.vue";

const darkModeValue = ref<boolean>(false);



</script>

<style scoped></style>