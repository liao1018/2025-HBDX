import { ref, computed } from 'vue'
import { getStartStage } from '../data/stages.js'

/**
 * 遊戲狀態管理
 */
export function useGameState() {
  // 當前關卡 ID
  const currentStageId = ref(getStartStage())
  
  // 已訪問的關卡列表（用於追蹤進度）
  const visitedStages = ref(new Set([getStartStage()]))

  /**
   * 前往下一個關卡
   * @param {string} nextStageId - 下一個關卡 ID
   */
  const goToStage = (nextStageId) => {
    if (nextStageId) {
      currentStageId.value = nextStageId
      visitedStages.value.add(nextStageId)
    }
  }

  /**
   * 重置遊戲
   */
  const resetGame = () => {
    const startStage = getStartStage()
    currentStageId.value = startStage
    visitedStages.value = new Set([startStage])
  }

  return {
    currentStageId,
    visitedStages,
    goToStage,
    resetGame
  }
}

