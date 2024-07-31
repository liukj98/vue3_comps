<template>
  <div
    class="radio-group"
    :style="{
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
    }"
  >
    <template v-if="hasOptions === true">
      <Radio v-for="item in options" :value="item.value" :label="item.label" />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, computed } from "vue";
import type { RadioGroupOption } from "./index.ts";
import Radio from "./Radio.vue"

type RadioGroupProps = {
  modelValue: string | number | boolean;
  direction?: "horizontal" | "vertical";
  selectedBackgroundImage?: string;
  unselectedBackgroundImage?: string;
  options?: RadioGroupOption[];
};

const hasOptions = computed(() => props.options && Array.isArray(props.options) && props.options.length > 0);

const props = withDefaults(defineProps<RadioGroupProps>(), {
  direction: "horizontal",
});

const emits = defineEmits(["update:modelValue", "change:modelValue"]);

provide("radioGroup", {
  modelValue: ref(props.modelValue),
  selectedBackgroundImage: ref(props.selectedBackgroundImage),
  unselectedBackgroundImage: ref(props.unselectedBackgroundImage),
  updateModelValue: (value: string | number | boolean) => {
    emits("update:modelValue", value);
  },
  changeModelValue: (value: string | number | boolean, e: Event) => {
    emits("change:modelValue", value, e);
  },
});
</script>
