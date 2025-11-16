<script setup>
import GameStage from './components/GameStage.vue'
import { useGameState } from './composables/useGameState.js'

const { currentStageId, goToStage } = useGameState()

// 處理選項選擇
const handleChoiceSelected = (nextStageId) => {
  console.log('handleChoiceSelected', nextStageId)
  goToStage(nextStageId)
}
</script>

<template>
  <GameStage 
    :stage-id="currentStageId" 
    @choice-selected="handleChoiceSelected"
  />
</template>
