# 專案文件結構建議

## 建議的文件結構

基於這是一個關卡式故事性 APP，以下是建議的文件組織方式：

```
2025-HBDX/
├── src/
│   ├── components/          # Vue 組件
│   │   ├── GameStage.vue    # 關卡組件（顯示故事內容、選項）
│   │   ├── ChoiceButton.vue # 選項按鈕組件
│   │   ├── MediaViewer.vue  # 圖片/影片展示組件
│   │   └── ProgressBar.vue  # 進度條（可選）
│   │
│   ├── data/                # 遊戲數據
│   │   └── stages.js        # 關卡數據（故事內容、選項、分支）
│   │   └── media.js         # 媒體資源映射（圖片/影片路徑）
│   │
│   ├── assets/              # 靜態資源
│   │   ├── images/          # 圖片資源
│   │   │   ├── stage-1/     # 各關卡的圖片
│   │   │   ├── stage-2/
│   │   │   └── ...
│   │   └── videos/          # 影片資源
│   │       ├── stage-1/     # 各關卡的影片
│   │       ├── stage-2/
│   │       └── ...
│   │
│   ├── composables/         # Vue 3 Composition API 可重用邏輯
│   │   ├── useGameState.js  # 遊戲狀態管理（當前關卡、進度）
│   │   └── useNavigation.js # 關卡導航邏輯
│   │
│   ├── utils/               # 工具函數
│   │   └── stageHelper.js   # 關卡相關的工具函數
│   │
│   ├── router/              # 路由配置（如果需要）
│   │   └── index.js
│   │
│   ├── App.vue              # 主應用組件
│   ├── main.js              # 入口文件
│   └── style.css            # 全局樣式
│
├── public/                  # 公共資源（如果需要外部訪問）
│   └── ...
│
└── docs/                    # 文檔
    ├── 1-PROJECT-INTRODUCTION.md
    └── 2-PROJECT-STRUCTURE.md
```

## 核心文件說明

### 1. 數據文件

#### `src/data/stages.js`
- 定義所有關卡的數據結構
- 包含：關卡 ID、標題、故事內容、選項、分支邏輯
- 範例結構：
```javascript
export const stages = {
  'stage-1': {
    id: 'stage-1',
    title: '抵達法國',
    content: '你剛抵達法國機場...',
    media: {
      type: 'image', // 或 'video'
      src: '/assets/images/stage-1/arrival.jpg'
    },
    choices: [
      {
        text: '選擇 A',
        nextStage: 'stage-2'
      },
      {
        text: '選擇 B',
        nextStage: 'stage-3'
      }
    ]
  },
  // ... 更多關卡
}
```

#### `src/data/media.js`（可選）
- 集中管理所有媒體資源的路徑
- 方便後續維護和替換

### 2. 組件文件

#### `src/components/GameStage.vue`
- 主要的關卡展示組件
- 顯示故事內容、圖片/影片、選項按鈕
- 處理用戶選擇和關卡切換

#### `src/components/ChoiceButton.vue`
- 選項按鈕組件
- 統一的按鈕樣式和交互效果

#### `src/components/MediaViewer.vue`
- 圖片和影片展示組件
- 支援響應式設計，適配手機畫面

### 3. 狀態管理

#### `src/composables/useGameState.js`
- 使用 Vue 3 Composition API 管理遊戲狀態
- 追蹤當前關卡、已訪問的關卡、遊戲進度等
- 可選：使用 localStorage 保存進度

#### `src/composables/useNavigation.js`
- 處理關卡之間的導航邏輯
- 根據選項決定下一個關卡

### 4. 資源文件夾

#### `src/assets/images/` 和 `src/assets/videos/`
- 按關卡組織圖片和影片
- 建議命名規範：`stage-{id}-{description}.{ext}`

## 技術建議

### 狀態管理選擇
- **簡單方案**：使用 Vue 3 的 `ref`/`reactive` + `provide`/`inject`
- **進階方案**：使用 Pinia（如果需要更複雜的狀態管理）

### 路由選擇
- **簡單方案**：不需要路由，使用組件切換即可
- **進階方案**：使用 Vue Router，每個關卡對應一個路由（方便分享特定關卡）

### 媒體處理
- 圖片：建議使用 WebP 格式以優化載入速度
- 影片：考慮使用 `<video>` 標籤，支援多種格式
- 響應式：使用 Tailwind CSS 的響應式類別適配不同螢幕尺寸

## 下一步行動

1. **創建數據結構**：先定義 `stages.js` 的數據結構
2. **建立核心組件**：創建 `GameStage.vue` 組件
3. **準備資源**：整理圖片和影片到對應文件夾
4. **實現導航邏輯**：建立關卡切換機制
5. **優化體驗**：添加過渡動畫、載入狀態等

