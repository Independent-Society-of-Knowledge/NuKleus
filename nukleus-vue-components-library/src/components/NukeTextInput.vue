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
  <div class="input-container
  group
  flex flex-row gap-[16px]
  p-[4px]
  nuke-space-attribute
  nuke-color-attribute
  transition-all
  border-solid
  border-[2px]
  h-[--nuke-space-primary] w-full

  border-[--nuke-color-secondary-200]
  hover:border-[--nuke-color-secondary-300]
  focus-within:border-solid
  focus-within:border-[--nuke-color-primary-600]
  focus-within:hover:border-[--nuke-color-primary-600]
  bg-[--nuke-color-secondary-100]

  dark:bg-[--nuke-color-secondary-900]
  dark:border-[--nuke-color-secondary-800]
  dark:hover:border-[--nuke-color-secondary-700]
  dark:focus-within:border-solid
  dark:focus-within:border-[--nuke-color-primary-600]
  dark:focus-within:hover:border-[--nuke-color-primary-600]
"
  :nuke-color-primary="primaryColor"
  :nuke-color-secondary="secondaryColor"
  :nuke-space-primary="size"
>
    <div class="left-icon
    transition-all duration-200 w-auto h-full text-[--nuke-color-secondary-400]
    hover:text-[--nuke-color-secondary-500] group-focus-within:text-[--nuke-color-primary-600]">
      <slot name="left-icon"/>
    </div>
    <input :type="type" :placeholder="placeHolder" v-model="model"
           class="
           transition-all
           h-full w-full border-0 outline-0 box-border
           p-0
           nuke-space-attribute
           bg-[--nuke-secondary-100]
           nuke-type-sans-d4-500-normal text-[--nuke-color-secondary-900]
           placeholder-[--nuke-color-secondary-400] placeholder:hover:text-[--nuke-color-secondary-500]
           placeholder:nuke-type-sans-d4-200-normal
           placeholder:select-none

           dark:bg-[--nuke-color-secondary-900]
           dark:text-[--nuke-color-secondary-100]

    "/>
    <div class="
    right-icon
    transition-all duration-200 w-auto h-full text-[--nuke-color-secondary-400]
    hover:text-[--nuke-color-secondary-500] group-focus-within:text-[--nuke-color-primary-600]">
      <slot name="right-icon"/>
    </div>
</div>
</template>
<script setup lang="ts">

import {Color} from "../composables/useColor.ts";
import {Space} from "../composables/useSize.ts";
import {watch} from "vue";

const props = withDefaults(
    defineProps<{
      primaryColor: Color
      secondaryColor: Color
      size: Space
      type: "text" | "email" | "password" | "search"
      placeHolder:string
    }>(),
    {
      size: "24px",
      primaryColor: "azure",
      secondaryColor: "gray",
      type: "text",
      placeHolder: "Enter Something Nice!"

    }
)

const model = defineModel()
const emit = defineEmits(['modelValue'])

watch(model, (newValue) => {
  emit("modelValue", newValue)
})


</script>
<style scoped lang="scss">

</style>