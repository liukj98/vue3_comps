## 使用

```vue
<script setup lang="ts">
let radioSelectedValue = ref<string>();
let radioOptions = ref<Array<RadioOption>>([
  {
    label: "钢琴",
    value: "钢琴",
  },
  {
    label: "吉他",
    value: "吉他",
  },
  {
    label: "小提琴",
    value: "小提琴",
  },
  {
    label: "萨克斯",
    value: "萨克斯",
  },
]);
</script>

<template>
  <h3>乐器</h3>
  <Radio v-model="radioSelectedValue" :options="radioOptions" />
  {{ radioSelectedValue }}
</template>
```
