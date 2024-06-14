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
<div class="input-container bg-red-400"
  :nuke-color-primary="primaryColor"
  :nuke-color-secondary="secondaryColor"
  :nuke-space-primary="size"
>
<input :type="type" :placeholder="placeHolder" v-bind="value"/>
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
      value: string
    }>(),
    {
      size: "16px",
      primaryColor: "azure",
      secondaryColor: "gray",
      type: "text",
      placeHolder: "Enter Something Nice!"

    }
)

defineEmits(['update:value'])



watch(props.value, (newValue) => {
  emit("update:value", newValue);
})
</script>
<style scoped lang="scss">

</style>