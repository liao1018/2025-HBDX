<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="w-full overflow-hidden rounded-lg shadow-lg">
    <img 
      :src="src" 
      :alt="alt"
      class="w-full h-auto object-cover"
    />
  </div>
</template>

