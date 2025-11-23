/**
 * 關卡數據定義
 * 主線：1 -> 2 -> 3 -> 4 -> 5
 * 支線：1.1, 1.2 等會多看到一些內容，但最終都會回到主線
 */

export const stages = {
  // 第1關 - 起始關卡
  '1': {
    id: '1',
    title: '旅程的開始',
    content: '妳一直有一個夢想，妳希望可以在年輕的時候去看看世界，在世界遙遠的角落體驗新的感受。妳終於下定決心，準備前往夢想中的國度。請問妳會獨自前往，還是希望有男朋友的陪伴呢？',
    media: {
      type: 'image',
      src: '1.JPG'
    },
    choices: [
      {
        text: '獨自前往',
        nextStage: '2'
      },
      {
        text: '有男朋友的陪伴',
        nextStage: '1.1'
      }
    ]
  },

  // 支線 1.1 - 機場附近逛逛
  '1.1': {
    id: '1.1',
    title: '前往西雅圖',
    content: '請問你想從哪裡前往西雅圖？',
    choices: [
      {
        text: '前往法國',
        nextStage: '2'
      }
    ]
  },

  // 第2關 - 主線
  '2': {
    id: '2',
    title: '抵達尼斯',
    content: '你終於抵達了尼斯。這是一個美麗的城市。',
    choices: [
      {
        text: '繼續',
        nextStage: '3'
      }
    ]
  },

  // 第3關 - 主線
  '3': {
    id: '3',
    title: '抵達巴黎',
    content: '你終於抵達了巴黎。這是一個美麗的城市。',
    choices: [
    ]
  },
}

/**
 * 獲取關卡數據
 * @param {string} stageId - 關卡 ID
 * @returns {Object|null} 關卡數據
 */
export function getStage(stageId) {
  return stages[stageId] || null
}

/**
 * 獲取起始關卡 ID
 * @returns {string} 起始關卡 ID
 */
export function getStartStage() {
  return '1'
}

