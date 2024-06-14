
<!--
  - Nukleus: A design system for knowledge (vue-components-library)
  -
  - Copyright © 2024 Independent Society of Knowledge
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU General Public License as published by
  - the Free Software Foundation, either version 2 of the License, or
  - (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU General Public License
  - along with this program. If not, see <https://www.gnu.org/licenses/>.
  -
  - Contact Information:
  - Independent Society of Knowledge
  - Email: projects@iskportal.com
  -
  - SPDX-License-Identifier: GPL-2.0-or-later
  -
  - Developed by: Amir H. Ebrahimnezhad (if you helped or your commits are going to be pulled please add your name and email with a comma.)
  - Email:        ceo@iskportal.com
  - version 1.0.0
  -
  -->

<template>

  <div :class="{ dark: darkModeValue }" class="h-screen mx-auto p-10 dark:bg-black transition-colors duration-200 flex justify-center items-center">

    <nuke-button @click=" darkModeValue=!darkModeValue"> Dark Mode
      <template v-slot:icon>
        <nuke-icon-moon width="100%" height="100%" />
      </template>
    </nuke-button>

    <nuke-progress-bar  :progress-value="50"/>
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