## 使用

```vue
<script setup lang="ts">
let checkboxSelectedValues = ref<Array<string | number | boolean>>([]);
let checkboxOptions = ref<Array<CheckboxOption>>([
  {
    label: "篮球",
    value: "篮球",
  },
  {
    label: "足球",
    value: "足球",
  },
  {
    label: "排球",
    value: "排球",
  },
  {
    label: "羽毛球",
    value: "羽毛球",
  },
]);
</script>

<template>
  <h3>运动</h3>
  <Checkbox v-model="checkboxSelectedValues" :options="checkboxOptions" />
  {{ checkboxSelectedValues }}
</template>
```
