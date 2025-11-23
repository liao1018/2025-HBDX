<script setup>
import { onMounted, ref } from 'vue'
import GameStage from './components/GameStage.vue'
import { useGameState } from './composables/useGameState.js'
import bgmAudio from './assets/bgm.mp3'

const { currentStageId, goToStage } = useGameState()

// 背景音樂控制
const audioRef = ref(null)
const hasStartedPlaying = ref(false)

// 開始播放背景音樂
const startBGM = async () => {
  if (audioRef.value && !hasStartedPlaying.value) {
    try {
      audioRef.value.volume = 0.5 // 設置音量為 50%
      audioRef.value.loop = true // 循環播放
      await audioRef.value.play()
      hasStartedPlaying.value = true
      // 移除事件監聽器，因為已經開始播放了
      document.removeEventListener('click', startBGM)
      document.removeEventListener('touchstart', startBGM)
    } catch (err) {
      console.log('播放失敗:', err)
    }
  }
}

onMounted(() => {
  if (audioRef.value) {
    // 嘗試自動播放
    audioRef.value.volume = 0.5
    audioRef.value.loop = true
    audioRef.value.play().catch(() => {
      // 如果自動播放失敗，監聽用戶交互
      document.addEventListener('click', startBGM, { once: true })
      document.addEventListener('touchstart', startBGM, { once: true })
    })
  }
})

// 處理選項選擇
const handleChoiceSelected = (nextStageId) => {
  console.log('handleChoiceSelected', nextStageId)
  goToStage(nextStageId)
}
</script>

<template>
  <audio ref="audioRef" :src="bgmAudio" preload="auto"></audio>
  <GameStage 
    :stage-id="currentStageId" 
    @choice-selected="handleChoiceSelected"
  />
</template>
