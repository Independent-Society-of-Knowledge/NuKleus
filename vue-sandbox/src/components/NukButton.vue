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
  <button
      class="
      flex flex-row items-center justify-center gap-32px px-8px
      nuk-coloring
      nuk-sizing

      text-white
      nuk-text-body-02
      [&[nuk-color-primary='gray']]:text-black
      [&[nuk-color-primary='gray']]:dark:text-white

      nuk-transition-all-fast-02-standard-productive
      hover:nuk-transition-all-fast-02-standard-productive
      active:nuk-transition-all-fast-02-standard-productive

      bg-[--nuk-primary-80]
      hover:bg-[--nuk-primary-70]
      active:bg-[--nuk-primary-60]

      [&[nuk-color-primary='gray']]:bg-[--nuk-primary-10]
      [&[nuk-color-primary='gray']]:hover:bg-[--nuk-primary-20]
      [&[nuk-color-primary='gray']]:active:bg-[--nuk-primary-30]

      [&[nuk-color-primary='gray']]:dark:bg-[--nuk-primary-80]
      [&[nuk-color-primary='gray']]:dark:hover:bg-[--nuk-primary-70]
      [&[nuk-color-primary='gray']]:dark:active:bg-[--nuk-primary-60]

      [&[nuk-size='small']]:py-4px
      [&[nuk-size='medium']]:py-8px
      [&[nuk-size='large']]:py-16px
      [&[nuk-size='xlarge']]:pt-8px
      [&[nuk-size='xlarge']]:pb-48px
      [&[nuk-size='max']]:pt-8px
      [&[nuk-size='max']]:pb-64px

      disabled:bg-[--nuk-gray-90] disabled:text-[--nuk-gray-70]
      "
      :nuk-color-primary="color"
      :nuk-size="size"
  >
    <slot name="default"/>
    <slot name="icon"/>
  </button>
</template>
<script setup lang="ts">
import type {Color, Size} from "@/composables/types";

const props = withDefaults(
    defineProps<{
      color: Color,
      size: Size
    }>(),
    {
      color: "azure",
      size: "medium"
    }
)
</script>
<style scoped>

</style>