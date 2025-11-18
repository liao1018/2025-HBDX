<script setup>
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { getStage } from '../data/stages.js'
import StageDefault from './stages/StageDefault.vue'

const props = defineProps({
  stageId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['choice-selected'])

// 頁面歷史記錄：記錄訪問過的頁面順序
const pageHistory = ref([props.stageId])

// 當 stageId 改變時，更新歷史記錄
watch(
  () => props.stageId,
  (newId) => {
    // 如果新頁面不在歷史記錄中，添加到末尾
    if (!pageHistory.value.includes(newId)) {
      pageHistory.value.push(newId)
    }
    // 如果新頁面在歷史記錄中但不是最後一個，移除它並添加到末尾
    else {
      const index = pageHistory.value.indexOf(newId)
      if (index !== pageHistory.value.length - 1) {
        pageHistory.value.splice(index, 1)
        pageHistory.value.push(newId)
      }
    }
  }
)

// 獲取當前關卡數據
const currentStage = computed(() => getStage(props.stageId))

// 獲取當前關卡所有可能的下一頁（從 choices 中提取）
const nextStageIds = computed(() => {
  if (!currentStage.value?.choices) return []
  // 去重，避免重複的下一頁
  return [...new Set(currentStage.value.choices.map(choice => choice.nextStage))]
})

// 構建要渲染的頁面列表：歷史記錄中的頁面 + 所有可能的下一頁
// 順序：歷史記錄中的頁面（按訪問順序），然後是所有可能的下一頁
const visibleStageIds = computed(() => {
  const list = [...pageHistory.value]
  // 添加所有可能的下一頁（如果還沒在列表中）
  nextStageIds.value.forEach(id => {
    if (!list.includes(id)) {
      list.push(id)
    }
  })
  return list
})

// 計算當前頁在可見列表中的索引（用於 translateY）
const currentIndex = computed(() => {
  return visibleStageIds.value.indexOf(props.stageId)
})

// 取得某關卡對應組件（支援自訂 component，否則預設）
const getStageComponent = (stageId) => {
  const s = getStage(stageId)
  if (s?.component) {
    return defineAsyncComponent(() => {
      // 目前尚無其他專屬組件映射，預留擴充點
      return Promise.resolve(StageDefault)
    })
  }
  return StageDefault
}

// 處理選項選擇
const handleChoiceSelected = (nextStageId) => {
  emit('choice-selected', nextStageId)
}
</script>

<template>
  <div class="relative h-screen overflow-hidden bg-white">
    <!-- 只渲染當前頁和可能的下一頁，通過 translateY 控制顯示位置 -->
    <div
      class="relative transition-transform duration-700 ease-out"
      :style="{
        transform: `translateY(-${currentIndex * 100}vh)`
      }"
    >
      <!-- 只渲染可見的關卡：當前頁 + 所有可能的下一頁 -->
      <div
        v-for="stageId in visibleStageIds"
        :key="stageId"
        class="relative"
        :style="{ height: '100vh' }"
      >
        <component
          :is="getStageComponent(stageId)"
          :stage-id="stageId"
          @choice-selected="handleChoiceSelected"
        />
      </div>
    </div>
  </div>
</template>

