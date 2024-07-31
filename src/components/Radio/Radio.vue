<template>
  <label class="radio-item">
    <input
      type="radio"
      name="radio"
      :value="value"
      :id="label"
      :checked="isChecked"
      v-model="modelValue"
      @change="handleChange"
      class="radio"
    />
    <i class="radio-item-icon" :style="radioBgStyle"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-else>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import type { Ref } from "vue";

type RadioItemProps = {
  value: string | number | boolean;
  label?: string;
};

const props = withDefaults(defineProps<RadioItemProps>(), {});

const {
  modelValue,
  selectedBackgroundImage,
  unselectedBackgroundImage,
  updateModelValue,
  changeModelValue,
} = inject("radioGroup") as {
  modelValue: Ref<string | number | boolean>;
  updateModelValue: (value: string | number | boolean) => void;
  changeModelValue: (value: string | number | boolean, e: Event) => void;
  selectedBackgroundImage: Ref<string>;
  unselectedBackgroundImage: Ref<string>;
};

const handleChange = (e: Event) => {
  updateModelValue((e.target as HTMLInputElement).value);
  changeModelValue((e.target as HTMLInputElement).value, e);
};

const isChecked = computed(() => {
  return modelValue.value === props.value;
});

const radioBgStyle = computed(() => {
  return {
    backgroundImage: isChecked.value
      ? `url(${selectedBackgroundImage.value})`
      : `url(${unselectedBackgroundImage.value})`,
  };
});
</script>

<style scoped>
.radio-item {
  cursor: pointer;
  .radio {
    display: none;
  }
  .radio-item-icon {
    background-size: contain;
    display: inline-block;
    width: 15px;
    height: 15px;
  }
}
</style>
