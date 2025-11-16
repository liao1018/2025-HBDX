<script setup>
import { ref, onMounted } from 'vue'
import { getStage } from '../../data/stages.js'
import ChoiceButton from '../ChoiceButton.vue'
import fallbackImage from '../../assets/images/1.JPG'

const props = defineProps({
  stageId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['choice-selected'])

const stage = getStage(props.stageId)

// 產生媒體來源（支援檔名或完整 URL）
const buildMediaUrl = (filename) => {
  if (!filename) return fallbackImage
  if (typeof filename === 'string' && (filename.startsWith('http') || filename.startsWith('/'))) {
    return filename
  }
  try {
    return new URL(`../../assets/images/${filename}`, import.meta.url).href
  } catch {
    return fallbackImage
  }
}

// 動畫狀態
const imageSlideIn = ref(false)    // 圖片滑入
const showContent = ref(false)     // 內容/按鈕淡入
const mediaSrc = ref(buildMediaUrl(stage?.media?.src))

// 事件
const handleChoice = (nextStageId) => {
  console.log('handleChoice', nextStageId)
  emit('choice-selected', nextStageId)
}

// 動畫序列
onMounted(() => {
  setTimeout(() => {
    imageSlideIn.value = true
  }, 50)
  setTimeout(() => {
    showContent.value = true
  }, 1000)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- 全螢幕背景圖 - 從畫面最底部滑入（full-bleed，寬度=螢幕寬） -->
    <div class="relative overflow-hidden mx-[calc(50%-50vw)]" style="height: 100vh; width: 100vw;">
      <div
        class="w-full h-full z-0"
        :style="{
          transform: imageSlideIn ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }"
      >
        <img
          :src="mediaSrc"
          :alt="stage?.title || '關卡圖片'"
          class="w-full h-full object-contain object-top pointer-events-none"
        />
      </div>

      <!-- 內容和按鈕區域 - 覆蓋在圖片上，動畫漸出 -->
      <div class="absolute inset-x-0 bottom-0 z-10">
        <div 
          class="max-w-2xl mx-auto p-4 transition-opacity duration-700 ease-out"
          :class="showContent ? 'opacity-100' : 'opacity-0'"
        >
          <!-- 關卡標題 -->
          <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">
            {{ stage?.title }}
          </h1>

          <!-- 關卡內容 -->
          <div class="bg-white/95 backdrop-blur rounded-lg shadow-lg p-6 mb-6">
            <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {{ stage?.content }}
            </p>
          </div>

          <!-- 選項按鈕 -->
          <div class="space-y-4">
            <ChoiceButton
              v-for="(choice, index) in stage?.choices"
              :key="index"
              :text="choice.text"
              @click="handleChoice(choice.nextStage)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 