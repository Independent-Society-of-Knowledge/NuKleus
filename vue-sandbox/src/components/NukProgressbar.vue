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
<!--suppress ALL -->
<template>
  <div class="
      flex
      flex-col
      w-full group

      nuk-coloring
      nuk-sizing
      nuk-transition-all
      nuk-duration-moderate-01
      nuk-standard-productive
"
       :nuk-color-primary="color"
       :nuk-color-secondary="'gray'"
       :nuk-size="size">
    <div
        class="
      nuk-transition-all
      nuk-duration-moderate-01
      nuk-standard-productive
      w-full
      group-[&[nuk-size='small']]:h-[2px]
      group-[&[nuk-size='medium']]:h-[4px]
      group-[&[nuk-size='large']]:h-[8px]
      group-[&[nuk-size='xlarge']]:h-[16px]
      group-[&[nuk-size='max']]:h-[32px]

      bg-[--nuk-secondary-10]
      group-hover:bg-[--nuk-secondary-20]
      dark:bg-[--nuk-secondary-80]
      dark:group-hover:bg-[--nuk-secondary-70]
      "

    >

      <div class="
        progress-indicator
        nuk-coloring
        float-left h-full

        nuk-transition-all
        nuk-duration-moderate-01
        nuk-standard-productive

        bg-[--nuk-primary-70]
        group-hover:bg-[--nuk-primary-60]
        group-[&[nuk-color-primary='gray']]:dark:bg-[--nuk-primary-20]
        group-[&[nuk-color-primary='gray']]:dark:group-hover:bg-[--nuk-primary-10]

"

      />
    </div>
    <div
      :show-percentage="`${showPercentage}`"
      :show-percentage-on-hover="showPercentageOnHover"
      class="
      nuk-transition-all
      nuk-duration-moderate-01
      nuk-standard-productive
      nuk-standard-productive


      [&[show-percentage='true']]:opacity-100

      [&[show-percentage='false']]:[&[show-percentage-on-hover='true']]:opacity-0
      [&[show-percentage='false']]:[&[show-percentage-on-hover='true']]:group-hover:opacity-100

      [&[show-percentage='false']]:[&[show-percentage-on-hover='false']]:opacity-0

      nuk-text-code-01

      text-[--nuk-secondary-10] group-hover:text-[--nuk-secondary-20] w-full flex
      dark:text-[--nuk-secondary-80] dark:group-hover:text-[--nuk-secondary-70] justify-end">
      {{ computedWidth }}
    </div>
  </div>
</template>
<script setup lang="ts">
import type {Color, Size} from "@/composables/types";
import {computed} from "vue";

const props = withDefaults(
    defineProps<{
      color: Color,
      size: Size,
      showPercentage:boolean,
      showPercentageOnHover: boolean,
      expectedValue: number,
      progressedValue: number
    }>(),
    {
      color: "azure",
      size: "medium",
      showPercentage: false,
      showPercentageOnHover: true,
      expectedValue: 100
    }
)

const computedWidth = computed(() => {
  return `${((props.progressedValue / props.expectedValue) * 100).toFixed(1)}%`
})

</script>

<style scoped>
.progress-indicator {
  width: v-bind(computedWidth);
}
</style>