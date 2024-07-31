import { createApp } from "vue";
import Dialog from "./Dialog.vue";

// 直接通过 api 调用展示 Dialog 组件，和 Toast 组件类似
// 重点还是思路，有思路其实代码都简单

// 1. 创建一个 div 容器
// 2. 创建一个 vue 应用实例，装载 Dialog 组件
// 3. 将应用实例挂载到 div 容器中

const createDialog = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  // 创建应用实例，并将其挂载到容器 div 中
  const ins = createApp(Dialog, {
    // 传递一些属性给 Dialog 组件

  });
  ins.mount(container);

  // 什么情况下将容器卸载同时将应用实例销毁？
};
