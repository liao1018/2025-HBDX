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
    class="w-full px-6 py-3 bg-[#008aae] hover:bg-[#007a9a] text-sm text-white font-medium rounded-lg transition-colors duration-200 active:bg-[#006a85]"
  >
    {{ text }}
  </button>
</template>

