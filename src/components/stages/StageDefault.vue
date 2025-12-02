<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { getStage } from '../../data/stages.js'
import ChoiceButton from '../ChoiceButton.vue'
import fallbackImage from '../../assets/images/default.JPG'

const props = defineProps({
  stageId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['choice-selected'])

const stage = computed(() => getStage(props.stageId))

// 產生媒體來源（支援檔名或完整 URL）
const buildMediaUrl = (filename, mediaType = 'image') => {
  if (!filename) return mediaType === 'video' ? null : fallbackImage
  if (typeof filename === 'string' && (filename.startsWith('http') || filename.startsWith('/'))) {
    return filename
  }
  try {
    const folder = mediaType === 'video' ? 'videos' : 'images'
    return new URL(`../../assets/${folder}/${filename}`, import.meta.url).href
  } catch {
    return mediaType === 'video' ? null : fallbackImage
  }
}

// 動畫狀態
const imageSlideIn = ref(false)    // 圖片滑入
const showContent = ref(false)     // 內容/按鈕淡入
const mediaType = computed(() => stage.value?.media?.type || 'image')
const mediaSrc = ref(buildMediaUrl(stage.value?.media?.src, mediaType.value))
const videoRef = ref(null)

// 嘗試播放視頻
const tryPlayVideo = async () => {
  if (!videoRef.value || mediaType.value !== 'video') {
    return
  }
  
  try {
    // 確保視頻已靜音
    videoRef.value.muted = true
    videoRef.value.volume = 0
    
    // 檢查視頻是否已加載足夠的數據
    if (videoRef.value.readyState >= 2) { // HAVE_CURRENT_DATA
      await videoRef.value.play()
    } else {
      // 如果還沒準備好，等待一下再試
      videoRef.value.addEventListener('canplay', async () => {
        try {
          await videoRef.value.play()
        } catch (e) {
          console.warn('Video play after canplay failed:', e.message)
        }
      }, { once: true })
    }
  } catch (error) {
    // 如果自動播放失敗，記錄但不中斷（瀏覽器限制）
    console.warn('Video autoplay failed:', error.message)
    // 如果錯誤是因為用戶未交互，在用戶點擊時會重試
  }
}

// 事件
const handleChoice = (nextStageId) => {
  // 在用戶交互時嘗試播放視頻（如果之前失敗）
  if (videoRef.value && mediaType.value === 'video') {
    tryPlayVideo()
  }
  emit('choice-selected', nextStageId)
}

// 動畫序列
onMounted(() => {
  setTimeout(() => {
    imageSlideIn.value = true
  }, 50)
  setTimeout(() => {
    showContent.value = true
    // 嘗試播放視頻
    if (mediaType.value === 'video') {
      setTimeout(() => tryPlayVideo(), 100)
    }
  }, 1000)
})

// 當 stageId 變更時，更新媒體並重置動畫
watch(
  () => props.stageId,
  async () => {
    imageSlideIn.value = false
    showContent.value = false
    mediaSrc.value = buildMediaUrl(stage.value?.media?.src, mediaType.value)
    // 重置 videoRef，等待新元素创建
    videoRef.value = null
    await nextTick()
    setTimeout(() => {
      imageSlideIn.value = true
    }, 50)
    setTimeout(() => {
      showContent.value = true
    }, 1000)
    // 等待视频元素创建后再尝试播放
    if (mediaType.value === 'video') {
      await nextTick()
      // 多次尝试，确保视频元素已创建
      setTimeout(() => tryPlayVideo(), 200)
      setTimeout(() => tryPlayVideo(), 500)
      setTimeout(() => tryPlayVideo(), 1000)
    }
  }
)
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
        <!-- 圖片 -->
        <img
          v-if="mediaType === 'image'"
          :src="mediaSrc"
          :alt="stage?.title || '關卡圖片'"
          class="w-full h-full object-contain object-top pointer-events-none"
        />
        <!-- 影片 -->
        <video
          v-else-if="mediaType === 'video' && mediaSrc"
          ref="videoRef"
          :src="mediaSrc"
          loop
          muted
          playsinline
          preload="auto"
          class="w-full h-full object-contain object-top pointer-events-none"
          @loadedmetadata="tryPlayVideo"
          @canplay="tryPlayVideo"
          @loadeddata="tryPlayVideo"
        />
      </div>

      <!-- 內容和按鈕區域 - 覆蓋在圖片上，動畫漸出 -->
      <div class="absolute inset-x-0 bottom-0 z-10">
        <div 
          class="max-w-2xl mx-auto p-4 transition-opacity duration-700 ease-out"
          :class="showContent ? 'opacity-100' : 'opacity-0'"
        >
          <!-- 關卡標題 -->
          <h1 class="bg-white/95 backdrop-blur rounded-lg shadow-lg p-6 mb-2 text-lg font-bold text-gray-800 text-center">
            {{ stage?.title }}
          </h1>

          <!-- 關卡內容 -->
          <div class="bg-white/95 backdrop-blur rounded-lg shadow-lg p-6 mb-2">
            <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {{ stage?.content }}
            </p>
          </div>

          <!-- 選項按鈕 -->
          <div class="flex gap-2">
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
