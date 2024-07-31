<template>
  <div class="dialog-container" v-if="modelValue">
    <div class="dialog-container-title">{{ title }}</div>
    <div class="dialog-container-content">{{ content }}</div>
    <div class="dialog-container-footer">
      <button class="dialog-btn-cancel" @click="clickClose">Cancel</button>
      <button class="dialog-btn-confirm" @click="clickConfirm">Confirm</button>
    </div>
  </div>
</template>

<script setup lang="ts">

type DialogProps = {
  modelValue: boolean,
  title?: string,
  content?: string,
}

const props = withDefaults(defineProps<DialogProps>(), {

})

const emits = defineEmits(["update:modelValue"])

const clickClose = () => {
  emits("update:modelValue", false)
}

const clickConfirm = () => {
  emits("update:modelValue", false)
}
</script>

<style scoped>
.dialog-container{
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #008c8c;
  color: #fff;
}
</style>
