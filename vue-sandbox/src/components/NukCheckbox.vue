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
  <input type="checkbox" v-model="model" class="hidden" :disabled="disabled"/>
  <div class="
    h-16px
    w-16px
    group flex items-center justify-center text-white

    nuk-coloring
    nuk-transition-background-color
    nuk-duration-fast-02
    nuk-standard-productive

    data-[disabled=false]:data-[checked=false]:bg-[--nuk-secondary-20]
    data-[disabled=false]:data-[checked=false]:hover:bg-[--nuk-secondary-30]
    data-[disabled=false]:data-[checked=false]:dark:bg-[--nuk-secondary-90]
    data-[disabled=false]:data-[checked=false]:dark:hover:bg-[--nuk-secondary-80]

    data-[disabled=false]:data-[checked=true]:bg-[--nuk-primary-70]
    data-[disabled=false]:data-[checked=true]:hover:bg-[--nuk-primary-80]

    data-[disabled=true]:text-[--nuk-secondary-50]
    data-[disabled=true]:data-[checked=false]:bg-[--nuk-secondary-20]
    data-[disabled=true]:data-[checked=false]:dark:bg-[--nuk-secondary-90]
    data-[disabled=true]:data-[checked=true]:bg-[--nuk-secondary-90]

    "
       :nuk-color-primary="color"
       nuk-color-secondary="gray"
       @click="checkFunction()"
       :data-checked="model"
       :data-disabled="disabled">


    <div class="
      nuk-transition-opacity
      nuk-duration-fast-02
      nuk-standard-productive
      group-data-[checked=false]:opacity-0
      group-data-[checked=true]:opacity-100
    ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
           width="16" height="16" viewBox="0 0 20 20">
        <defs>
          <clipPath id="master_svg0_134_08844">
            <rect x="0" y="0" width="16" height="16" rx="0"/>
          </clipPath>
        </defs>
        <g clip-path="url(#master_svg0_134_08844)">
          <path
              d="M8.000000047683717,13.199999904632568L3.6000000476837157,8.799999904632568L2.700000047683716,9.699999904632568L7.100000047683716,14.099999904632568L8.000000047683717,14.999999904632569L16.500000047683717,6.499999904632569L15.600000047683716,5.599999904632568L8.000000047683717,13.199999904632568Z"
              fill="#fff" fill-opacity="1"/>
        </g>
        <g>
          <path
              d="M15.600000047683716,5.599999904632568L8.000000047683717,13.199999904632568L3.6000000476837157,8.799999904632568L2.700000047683716,9.699999904632568L7.100000047683716,14.099999904632568L8.000000047683717,14.999999904632569L16.500000047683717,6.499999904632569L15.600000047683716,5.599999904632568Z"
              fill="#fff" fill-opacity="1"/>
        </g>
      </svg>
    </div>
  </div>

</template>
<script setup lang="ts">


import type {Color} from "@/composables/types";
import {ref} from "vue";

const model = ref(false)
function checkFunction() {
  if (!props.disabled) {
    model.value = !model.value
  }
}

const props = withDefaults(
    defineProps<{
      color: Color
      disabled: boolean
    }>()
    , {
      disable: false,
      color: "azure"
    }
)
</script>
<style scoped lang="scss">

</style>