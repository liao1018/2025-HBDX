<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
})

defineEmits(['click'])
</script>

<template>
  <button
    @click="$emit('click')"
    class="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 active:bg-blue-700"
  >
    {{ text }}
  </button>
</template>

