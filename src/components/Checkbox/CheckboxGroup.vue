<template>
  <div
    class="checkbox-group"
    :style="{
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
    }"
  >
    <template v-if="hasOptions === true">
      <Checkbox
        v-for="item in options"
        :value="item.value"
        :label="item.label"
      />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, computed } from "vue";
import Checkbox from "./Checkbox.vue";
import type { CheckboxGroupOption } from "./index.ts";

type CheckboxGroupProps = {
  modelValue: Array<string | number | boolean>;
  direction?: "horizontal" | "vertical";
  selectedBackgroundImage?: string;
  unselectedBackgroundImage?: string;
  options?: CheckboxGroupOption[];
};

const hasOptions = computed(
  () =>
    props.options && Array.isArray(props.options) && props.options.length > 0
);

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  direction: "horizontal",
});

const emits = defineEmits(["update:modelValue", "change:modelValue"]);
provide("checkboxGroup", {
  modelValue: ref(props.modelValue),
  selectedBackgroundImage: ref(props.selectedBackgroundImage),
  unselectedBackgroundImage: ref(props.unselectedBackgroundImage),
  updateModelValue: (value: Array<string | number | boolean>) => {
    emits("update:modelValue", value);
  },
  changeModelValue: (value: Array<string | number | boolean>, e: Event) => {
    emits("change:modelValue", value, e);
  },
});
</script>
