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
  <div class="flex flex-nowrap flex-row
          nuk-transition-font-color
          nuk-duration-moderate-02
          nuk-standard-expressive
          nuk-text-body-compact-02
">
    <div v-for="dir in dirs" :key="dir[0]"
         class="
nuk-transition-font-color
          nuk-duration-moderate-02
          nuk-standard-expressive
         text-gray-30
         hover:text-gray-70
         active:text-gray-80
pl-8px
         dark:text-gray-70
         dark:hover:text-gray-30
         dark:active:text-gray-20
         flex flex-nowrap flex-row justify-center gap-8px items-center text-nowrap">
      <a :href="dir[1]">{{ dir[0] }}</a>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" fill="white" fill-opacity="0.01" style="mix-blend-mode:multiply"/>
        <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="currentColor"/>
      </svg>
    </div>
    <div></div>
    <div class="flex flex-nowrap flex-row nuk-transition-font-color pl-8px
          nuk-duration-moderate-02
          nuk-coloring
          nuk-standard-expressive
          text-[--nuk-primary-70]
          hover:text-[--nuk-primary-60]
          text-nowrap

"
    :nuk-color-primary="color"
    ><a href="#">{{ current }}</a></div>
  </div>
</template>
<script setup lang="ts">

import type {Color} from "@/composables/types";

const props = withDefaults(
    defineProps<{
      dirs: [string, string][],
      current: string
      color: Color,
    }>(), {
      color: 'shore',
      dirs: ['Home', 'Products', 'MoleKule'],
      current: 'Documentation'
    }
)

</script>
<style scoped>

</style>