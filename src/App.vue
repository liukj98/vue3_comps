<template>
  <div class="checkbox-container">
    <h3>Checkbox 示例</h3>
    <CheckboxGroup
      v-model="checkboxSelectedValues"
      :selectedBackgroundImage="checkboxCheckedUrl"
      :unselectedBackgroundImage="checkboxUncheckedUrl"
      @change:modelValue="handleChange"
      direction="vertical"
    >
      <Checkbox :value="'篮球'" label="篮球">篮球插槽</Checkbox>
      <Checkbox :value="'足球'" label="足球" />
      <Checkbox :value="'排球'" label="排球" />
      <Checkbox :value="'羽毛球'" label="羽毛球" />
    </CheckboxGroup>
    {{ checkboxSelectedValues }}
  </div>
  <div class="radio-container">
    <h2>Radio 示例</h2>
    <RadioGroup
      v-model="radioSelectedValue"
      @change:modelValue="handleChange"
      :selectedBackgroundImage="checkedUrl2"
      :unselectedBackgroundImage="uncheckedUrl2"
      direction="vertical"
      :options="radioOptions"
    >
      <Radio :value="'钢琴'" label="钢琴1">钢琴插槽</Radio>
      <Radio :value="'吉他'" label="吉他2" />
      <Radio :value="'小提琴'" label="小提琴3" />
      <Radio :value="'萨克斯'" label="萨克斯4" />
      <Radio :value="'手风琴'">手风琴5</Radio>
    </RadioGroup>
    {{ radioSelectedValue }}
  </div>
  <div class="toast-container">
    <h3>Toast 示例</h3>
    <button @click="showToast">默认</button>
    <button @click="showToast2">info</button>
    <button @click="showToast3">success</button>
    <button @click="showToast4">warning</button>
    <!-- 直接使用组件 -->
    <!-- <Toast message="kkkkk" :duration="1000000" /> -->
  </div>
  <div class="dialog-container">
    <h3>Dialog 示例</h3>
    <Dialog v-model="dialogVisible" title="hello" content="world"/>
    <button @click="showDialog">展示</button>
  </div>
  <div class="test-container">
    <Test v-model="test" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Radio from "./components/Radio/Radio.vue";
import RadioGroup from "./components/Radio/RadioGroup.vue";
import Checkbox from "./components/Checkbox/Checkbox.vue";
import CheckboxGroup from "./components/Checkbox/CheckboxGroup.vue";
import type { CheckboxGroupOption } from "./components/Checkbox/index";
import checkedUrl1 from "@/assets/checked1.png";
import uncheckedUrl1 from "@/assets/unchecked1.png";
import checkedUrl2 from "@/assets/checked2.png";
import uncheckedUrl2 from "@/assets/unchecked2.png";
import checkboxCheckedUrl from "@/assets/checkbox-checked.png";
import checkboxUncheckedUrl from "@/assets/checkbox-unchecked.png";
import Toast from "./components/Toast/Toast.vue";
import Test from "./components/Test/Test.vue";
import toast from './components/Toast/toastService'
import Dialog from './components/Dialog/Dialog.vue'

const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
}

const showToast = () => {
  toast('默认样式') 
}

const showToast2 = () => {
  toast('info 样式', 'info') 
}

const showToast3 = () => {
  toast('success 样式', 'success') 
}

const showToast4 = () => {
  toast('warning 样式', 'warning') 
}

// 多选配置
let checkboxSelectedValues = ref<Array<string | number | boolean>>([
  "篮球",
  "足球",
]);
let checkboxGroupOptions = ref<Array<CheckboxGroupOption>>([
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

// 单选配置
let radioSelectedValue = ref("吉他3");
let radioOptions = ref([
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

const age = ref(10);

const handleChange = (value: Array<string | number | boolean>, e: Event) => {
  // console.log(value, e)
};

const test = ref("hello");

</script>

<style scoped lang="less">
.checkbox-container,
.radio-container,
.toast-container,
.test-container,
.dialog-container {
  border: 2px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}
</style>
