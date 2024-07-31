// toastService.js
import { createApp, h } from "vue";
import type { App } from "vue";
import Toast from "./Toast.vue";
import type { ToastType } from "./index";

let toastInstance: App | null = null;

const toast = (message: string, type?: ToastType, duration = 3000) => {
  if (toastInstance) {
    toastInstance.unmount();
  }

  const container = document.createElement("div");
  document.body.appendChild(container);

  toastInstance = createApp({
    render() {
      return h(Toast, { message, type, duration });
    },
  });

  toastInstance.mount(container);
};

export default toast;
