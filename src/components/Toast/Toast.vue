<template>
  <div v-if="visible" :class="['toast', visible === true ? 'show' : '', type]">
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import type { ToastType } from "./index";

type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
};

const props = withDefaults(defineProps<ToastProps>(), {
  message: "",
  duration: 3000,
});

// State
const visible = ref<boolean>(false);

// Show toast
const show = () => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
};

watch(
  () => props.message,
  (newMessage) => {
    if (newMessage) {
      show();
    }
  }
);

onMounted(() => {
  show();
});
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border-radius: 5px;
  transition: opacity 0.5s linear;
  opacity: 0;
  z-index: 1000;
}
.toast.show {
  opacity: 0.9;
}
.toast.info {
  background-color: #007bff;
}
.toast.success {
  background-color: #28a745;
}
.toast.error {
  background-color: #dc3545;
}
.toast.warning {
  background-color: #ffc107;
}
</style>
