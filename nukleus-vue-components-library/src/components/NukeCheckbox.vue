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
  <input type="checkbox" v-model="model" class="hidden" :disabled="disabled" />
  <div class="
    h-[--nuke-space-primary]
    w-[--nuke-space-primary]
    group flex items-center justify-center text-white

    nuke-color-attribute
    nuke-space-attribute
    nuke-transition-colors

    data-[disabled=false]:data-[checked=false]:bg-[--nuke-color-secondary-200]
    data-[disabled=false]:data-[checked=false]:hover:bg-[--nuke-color-secondary-300]
    data-[disabled=false]:data-[checked=false]:dark:bg-[--nuke-color-secondary-900]
    data-[disabled=false]:data-[checked=false]:dark:hover:bg-[--nuke-color-secondary-800]

    data-[disabled=false]:data-[checked=true]:bg-[--nuke-color-primary-700]
    data-[disabled=false]:data-[checked=true]:hover:bg-[--nuke-color-primary-800]

    data-[disabled=true]:text-[--nuke-color-secondary-500]
    data-[disabled=true]:data-[checked=false]:bg-[--nuke-color-secondary-200]
    data-[disabled=true]:data-[checked=false]:dark:bg-[--nuke-color-secondary-900]
    data-[disabled=true]:data-[checked=true]:bg-[--nuke-color-secondary-900]

    "
       :nuke-color-primary="primaryColor"
       :nuke-color-secondary="secondaryColor"
       :nuke-space-primary="size"
        @click="checkFunction()"
       :data-checked="model"
       :data-disabled="disabled">


    <nuke-icon-checkmark width="100%" heigt="100%" class="
      transition-opacity
      group-data-[checked=false]:opacity-0
      group-data-[checked=true]:opacity-100
    "/>
  </div>

</template>
<script setup lang="ts">

import {Color} from "../composables/useColor.ts";
import {Space} from "../composables/useSize.ts";
import NukeIconCheckmark from "./icon-vue-components/nuke-icon-checkmark.vue";


const model = defineModel()

function checkFunction(){
  if (!props.disabled) {
    model.value = !model.value
  }
}

const props = withDefaults(
    defineProps<{
      primaryColor: Color
      secondaryColor: Color
      size: Space
      disabled: boolean


    }>()
    , {
      disable: false,
      size: "16px",
      secondaryColor: "gray",
      primaryColor:"azure"
    }
)
</script>
<style scoped lang="scss">

</style>