<template>
  <label class="checkbox-item">
    <input
      type="checkbox"
      name="checkbox"
      :value="value"
      :id="label"
      :checked="isChecked"
      v-model="modelValue"
      @change="handleChange"
      class="checkbox"
      :style="{
        display: selectedBackgroundImage === undefined ? 'inline-block' : 'none'
      }"
    />
    <i class="checkbox-item-icon" :style="checkboxBgStyle"></i>
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
} = inject("checkboxGroup") as {
  modelValue: Ref<Array<string | number | boolean>>;
  updateModelValue: (value: Array<string | number | boolean>) => void;
  changeModelValue: (value: Array<string | number | boolean>, e: Event) => void;
  selectedBackgroundImage: Ref<string>;
  unselectedBackgroundImage: Ref<string>;
};

const handleChange = (e: Event) => {
  updateModelValue(modelValue.value);
  changeModelValue(modelValue.value, e);
};

const isChecked = computed(() => {
  return modelValue.value.includes(props.value);
});

const checkboxBgStyle = computed(() => {
  return {
    backgroundImage: isChecked.value
      ? `url(${selectedBackgroundImage.value})`
      : `url(${unselectedBackgroundImage.value})`,
    display: selectedBackgroundImage.value === undefined ? 'none' : 'inline-block',
    width: '15px',
    height: '15px',
  };
});
</script>

<style scoped>
.checkbox-item {
  cursor: pointer;
  .checkbox-item-icon {
    background-size: contain;
    display: inline-block;
  }
}
</style>
