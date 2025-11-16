<script setup>
import { ref, computed, onMounted } from 'vue'
import { getStage } from '../../data/stages.js'
import ChoiceButton from '../ChoiceButton.vue'
import MediaViewer from '../MediaViewer.vue'

const props = defineProps({
  stageId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['choice-selected'])

// 獲取當前關卡數據
const stage = computed(() => getStage(props.stageId))

// 動畫狀態
const mediaSlideIn = ref(false) // 圖片/影片滑入狀態
const showContent = ref(false) // 內容和按鈕顯示狀態

// 處理選項點擊
const handleChoice = (nextStageId) => {
  emit('choice-selected', nextStageId)
}

// 動畫序列
onMounted(() => {
  // 1. 圖片/影片由下往上滑入（立即開始）
  setTimeout(() => {
    mediaSlideIn.value = true
  }, 50) // 小延遲確保動畫觸發
  
  // 2. 圖片/影片滑入完成後，漸出內容和按鈕（約1秒後）
  setTimeout(() => {
    showContent.value = true
  }, 1000)
})
</script>

<template>
  <div v-if="stage" class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- 全螢幕背景圖/影片 - 從畫面最底部滑入（full-bleed，寬度=螢幕寬） -->
    <div v-if="stage.media" class="relative overflow-hidden mx-[calc(50%-50vw)]" style="height: 100vh; width: 100vw;">
      <div
        class="w-full h-full z-0"
        :style="{
          transform: mediaSlideIn ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }"
      >
        <img
          :src="stage.media.src"
          :alt="stage.title"
          class="w-full h-full object-contain object-top pointer-events-none"
        />
      </div>
    </div>

    <!-- 內容和按鈕區域 - 緊接在圖片下方，動畫漸出 -->
    <div 
      class="max-w-2xl mx-auto p-4 -mt-8 transition-opacity duration-700 ease-out"
      :class="showContent ? 'opacity-100' : 'opacity-0'"
    >
      <!-- 關卡標題 -->
      <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
        {{ stage.title }}
      </h1>

      <!-- 關卡內容 -->
      <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
        <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {{ stage.content }}
        </p>
      </div>

      <!-- 選項按鈕 -->
      <div class="space-y-4">
        <ChoiceButton
          v-for="(choice, index) in stage.choices"
          :key="index"
          :text="choice.text"
          @click="handleChoice(choice.nextStage)"
        />
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <p class="text-gray-500">關卡不存在</p>
  </div>
</template>

