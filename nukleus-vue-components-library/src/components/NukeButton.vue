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
    nuke-color-compute
    nuke-space-compute
    px-[--nuke-space-primary]
    pt-[--nuke-space-primary]
    pb-[--nuke-space-secondary]

    "
          :class="{'nuke-button-normal': type === 'normal', 'nuke-button-bordered': type === 'bordered'}"
          :nuke-color-primary="primaryColor"

          :nuke-space-primary="computedButtonSizes.primary"
          :nuke-space-secondary="computedButtonSizes.secondary"


  >
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
      type: "normal" | "bordered"

    }>(),
    {
      primaryColor: "gray",
      size: "regular",
      type: "normal"
    }
)

const computedButtonSizes = computed(()=> {
  if (props.size != "large" || props.size != "large" || props.size != "large")  {
    return {
      primary: props.size,
      secondary: props.size
    }
  }
  else {
    return {
      primary: "regular",
      secondary: props.size
    }
  }
})

</script>


<style scoped>
.nuke-button-normal{
  @apply
  text-white flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans text-nowrap
  bg-[--nuke-color-primary-800]
  hover:bg-[--nuke-color-primary-700]
  active:bg-[--nuke-color-primary-800]
  dark:bg-[--nuke-color-primary-700]
  dark:hover:bg-[--nuke-color-primary-600]
  dark:active:bg-[--nuke-color-primary-700];
}
.nuke-button-bordered{
  @apply
  text-[--nuke-color-primary-800] flex flex-row  transition-all duration-200  gap-[32px] text-[14px] font-plex-sans
  px-[16px] border-[2px]
  border-[--nuke-color-primary-800]
  hover:border-[--nuke-color-primary-700] hover:text-[--nuke-color-primary-700]
  active:border-[--nuke-color-primary-800] active:text-[--nuke-color-primary-800]

  dark:border-[--nuke-color-primary-400] dark:text-[--nuke-color-primary-400]
  dark:hover:border-[--nuke-color-primary-300] dark:hover:text-[--nuke-color-primary-300]
  dark:active:border-[--nuke-color-primary-400] dark:active:text-[--nuke-color-primary-400];
}

</style>