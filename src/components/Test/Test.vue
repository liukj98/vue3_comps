<template>
  <h2>
    {{ model }}
    <button @click="handleClick">change</button>
  </h2>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const model = defineModel()

const handleClick = () => {
  model.value = 'changed'
}

</script>
