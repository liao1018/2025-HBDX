/**
 * 關卡數據定義
 * 主線：1 -> 2 -> 3 -> 4 -> 5
 * 支線：1.1, 1.2 等會多看到一些內容，但最終都會回到主線
 */

export const stages = {
  // 第1關 - 起始關卡
  '1': {
    id: '1',
    title: '前往法國',
    content: '請問你想從哪裡前往法國？',
    media: {
      type: 'image',
      src: '1.JPG' // 圖片文件名，實際路徑在組件中處理
    },
    component: 'Stage1', // 指定使用 Stage1 組件
    choices: [
      {
        text: '從台灣出發',
        nextStage: '2'
      },
      {
        text: '先去西雅圖玩幾天',
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
      {
        text: '繼續',
        nextStage: '4'
      }
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

