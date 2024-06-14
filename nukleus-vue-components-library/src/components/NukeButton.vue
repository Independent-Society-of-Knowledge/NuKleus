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
  <button class="
    nuke-color-attribute
    nuke-space-attribute
    px-[--nuke-space-primary]
    pt-[--nuke-space-primary]
    pb-[--nuke-space-secondary]

    [&[type=normal]]:border-0
    [&[type=normal]]:text-white flex flex-row items-center  transition-all duration-200  gap-[32px] nuke-type-sans-d4-400-normal text-nowrap
    [&[type=normal]]:bg-[--nuke-color-primary-800]
    [&[type=normal]]:hover:bg-[--nuke-color-primary-700]
    [&[type=normal]]:active:bg-[--nuke-color-primary-800]
    [&[type=normal]]:dark:bg-[--nuke-color-primary-700]
    [&[type=normal]]:dark:hover:bg-[--nuke-color-primary-600]
    [&[type=normal]]:dark:active:bg-[--nuke-color-primary-700]

    [&[type=border]]:bg-transparent
    [&[type=border]]:text-[--nuke-color-primary-800]
    [&[type=border]]:border-[--nuke-border-width-2px]
    [&[type=border]]:border-solid
    [&[type=border]]:border-[--nuke-color-primary-800]
    [&[type=border]]:hover:border-[--nuke-color-primary-700] [&[type=border]]:hover:text-[--nuke-color-primary-700]
    [&[type=border]]:active:border-[--nuke-color-primary-800] [&[type=border]]:active:text-[--nuke-color-primary-800]
    [&[type=border]]:dark:border-[--nuke-color-primary-400] [&[type=border]]:dark:text-[--nuke-color-primary-400]
    [&[type=border]]:dark:hover:border-[--nuke-color-primary-300] [&[type=border]]:dark:hover:text-[--nuke-color-primary-300]
    [&[type=border]]:dark:active:border-[--nuke-color-primary-400] [&[type=border]]:dark:active:text-[--nuke-color-primary-400]
    "
          :nuke-color-primary="primaryColor"
          :nuke-space-primary="computedButtonSizes.primary"
          :nuke-space-secondary="computedButtonSizes.secondary"
          :type="type">
    <div class="min-w-0">
      <slot name="default"/>
    </div>
    <div class="h-[18px] w-[18px] ">
      <slot name="icon"/>
    </div>
  </button>
</template>
<script setup lang="ts">
import {Color} from "../composables/useColor.ts";
import {Space} from "../composables/useSize.ts";
import {computed} from "vue";

const props = withDefaults(
    defineProps<{
      primaryColor: Color
      size: Space
      type: "normal" | "border"

    }>(),
    {
      primaryColor: "azure",
      size: "16px",
      type: "normal"
    }
)

const computedButtonSizes = computed(()=> {
  if (props.size != "64px" && props.size != "48px" && props.size != "128px" && props.size != "512px")  {
    return {
      primary: props.size,
      secondary: props.size
    }
  }
  else {
    return {
      primary: "16px",
      secondary: props.size
    }
  }
})

</script>


<style scoped>
</style>