<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { getStage } from '../data/stages.js'
import StageDefault from './stages/StageDefault.vue'
import Stage1 from './stages/Stage1.vue'

const props = defineProps({
  stageId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['choice-selected'])

// 獲取當前關卡數據
const stage = computed(() => getStage(props.stageId))

// 動態加載關卡組件
const stageComponent = computed(() => {
  if (!stage.value) return null
  
  // 如果關卡指定了專屬組件，則使用該組件
  if (stage.value.component) {
    // 動態導入對應的關卡組件
    // Vite 支持動態導入，但需要明確的路徑
    return defineAsyncComponent(() => {
      const componentName = stage.value.component
      // 使用明確的導入路徑
      if (componentName === 'Stage1') {
        return import('./stages/Stage1.vue')
      }
      // 可以繼續添加其他關卡組件
      // 如果找不到對應組件，返回預設組件
      return Promise.resolve(StageDefault)
    })
  }
  
  // 否則使用預設組件（通用架構，以 Stage1 為預設）
  return Stage1
})
</script>

<template>
  <component 
    v-if="stage"
    :is="stageComponent"
    :stage-id="stageId"
    @choice-selected="(nextStageId) => $emit('choice-selected', nextStageId)"
  />
  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500">關卡不存在</p>
  </div>
</template>

