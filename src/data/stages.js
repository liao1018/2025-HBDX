/**
 * 關卡數據定義
 * 主線：1 -> 2 -> 3 -> 4 -> 5
 * 支線：1.1, 1.2 等會多看到一些內容，但最終都會回到主線
 */

export const stages = {
  // 第0關 - 起始關卡
  0: {
    id: "0",
    title: "前言",
    content:
      "測試",
    media: {
      type: "image",
      src: "1.JPG",
    },
    choices: [
      {
        text: "開始旅程",
        nextStage: "1",
      },
    ],
  },
  // 第1關 - 起始關卡
  1: {
    id: "1",
    title: "旅程的開始",
    content:
      "妳一直有一個夢想，妳希望可以在年輕的時候去看看世界，在世界遙遠的角落體驗新的感受。妳終於下定決心，準備前往夢想中的國度。請問妳會獨自前往，還是希望有男朋友的陪伴呢？",
    media: {
      type: "image",
      src: "1.JPG",
    },
    choices: [
      {
        text: "獨自前往",
        nextStage: "1.1",
      },
      {
        text: "有男朋友的陪伴",
        nextStage: "1.2",
      },
    ],
  },

  1.1: {
    id: "1.1",
    title: "妳決定獨自前往",
    content:
      "不過上了飛機，妳發現男友坐在妳旁邊。他希望可以一起去，希望可以跟妳一起完成這個旅程。他覺得一切一定都會很好玩，也希望妳在遙遠的地方至少有個人可以依靠。(妳選錯選項了)",
    media: {
      type: "image",
      src: "1.1.JPG",
    },
    choices: [
      {
        text: "前往尼斯",
        nextStage: "2",
      },
    ],
  },

  1.2: {
    id: "1.2",
    title: "妳決定跟男友一起前往",
    content: "他也很希望能夠跟你一起探索這個世界，一起出發吧！",
    media: {
      type: "video",
      src: "1.2.MP4",
    },
    choices: [
      {
        text: "前往尼斯",
        nextStage: "2",
      },
    ],
  },

  // 第2關 - 主線
  2: {
    id: "2",
    title: "抵達尼斯",
    content:
      "終於抵達了尼斯。真的到達法國的時候有一種不真實的感覺。到了尼斯第一件事妳想要做什麼呢？",
    media: {
      type: "image",
      src: "2.JPG",
    },
    choices: [
      {
        text: "馬塞納廣場",
        nextStage: "2.1",
      },
      {
        text: "先吃個海鮮大餐",
        nextStage: "2.2",
      },
      {
        text: "去海邊走走",
        nextStage: "2.3",
      },
    ],
  },

  2.1: {
    id: "2.1",
    title: "馬塞納廣場",
    content:
      "你們終於來到了馬塞納廣場，這個是妳在看「離線找真愛」時經常看到的景點，讓妳有一種原來就是這裡啊！的感覺。",
    media: {
      type: "image",
      src: "2.1.JPG",
    },
    choices: [
      {
        text: "回飯店休息",
        nextStage: "3",
      },
    ],
  },

  2.2: {
    id: "2.2",
    title: "吃個海鮮大餐",
    content:
      "這是你們來到尼斯的第一餐，雖然價格很貴，但義大利麵份量超級大，海鮮也超級新鮮，你們吃的很開心！跟店員結帳的時候也因為要開始練習妳的法文，所以有些緊張。但最後還是完美地做到了！(妳真棒！)",
    media: {
      type: "image",
      src: "2.2.JPG",
    },
    choices: [
      {
        text: "回飯店休息",
        nextStage: "3",
      },
    ],
  },
  2.3: {
    id: "2.3",
    title: "去海邊走走",
    content:
      "你們終於來到了海邊，這裡的海水超級藍，沙灘也很乾淨，你們在海邊坐著，看看日落！真的看到這一幕的時候，妳感覺到這就是妳出國的原因！(看到妳開心的時候我也很開心)",
    media: {
      type: "image",
      src: "2.3.JPG",
    },
    choices: [
      {
        text: "回飯店休息",
        nextStage: "3",
      },
    ],
  },

  3: {
    id: "3",
    title: "明天要去哪裡玩呢？",
    content: "因為時差的關係，你們洗了個澡，然後就睡覺了。明天要去哪裡玩呢？",
    media: {
      type: "image",
      src: "3.JPG",
    },
    choices: [
      {
        text: "去尼斯附近的城鎮",
        nextStage: "3.1",
      },
      {
        text: "去爬山?",
        nextStage: "3.2",
      },
    ],
  },

  3.1: {
    id: "3.1",
    title: "芒通",
    content:
      "你們決定去芒通，這裡的聖米歇爾階梯超夢幻!!後面還看得到海超級美!!希望妳在芒通玩得開心!!",
    media: {
      type: "image",
      src: "3.1.JPG",
    },
    choices: [
      {
        text: "下一站",
        nextStage: "4",
      },
    ],
  },

  3.2: {
    id: "3.2",
    title: "城堡山公園",
    content:
      "你們決定去城堡山公園，爬山爬了一陣子，但是看到上面的景色，老城區配上海景，就覺得太直得了！(只要旁邊沒有一堆小朋友就好了)",
    media: {
      type: "image",
      src: "3.2.JPG",
    },
    choices: [
      {
        text: "下一站",
        nextStage: "4",
      },
    ],
  },

  4: {
    id: "4",
    title: "前往下一站",
    content:
      "你們可不是來玩的，你們回到住宿的地方吃泡麵，準備前往明天打工換宿的地點。請問你夢想中第一個打工換宿地點是哪裡呢？",
    media: {
      type: "image",
      src: "4.JPG",
    },
    choices: [
      {
        text: "有很多綿羊的地方",
        nextStage: "4.1",
      },
      {
        text: "一個森林的小木屋(沒有廁所)",
        nextStage: "4.2",
      },
    ],
  },
  4.1: {
    id: "4.1",
    title: "有很多綿羊的地方",
    content:
      "你們來到了有七隻綿羊的一個小農場，你們每天的第一個工作是擠羊奶。你覺得怎麼樣呢？",
    media: {
      type: "video",
      src: "4.1.MP4",
    },
    choices: [
      {
        text: "回到 main house 看一下",
        nextStage: "5",
      },
    ],
  },
  4.2: {
    id: "4.2",
    title: "住在小木屋",
    content: "你們住的地方是一個小木屋，一進來的蚊子多到爆，而且沒有廁所，你覺得怎麼樣呢？",
    media: {
      type: "image",
      src: "4.2.JPG",
    },
    choices: [
      {
        text: "回到 main house 看一下",
        nextStage: "5",
      },
    ],
  },
  5: {
    id: "5",
    title: "main house",
    content: "main house 的外面還是很漂亮，外面的吊床跟鞦韆也非常可愛。看起來是除了睡覺以外的時�間都可以在這裡度過。明天要開始工作了，妳希望明天的天氣怎麼樣呢？",
    media: {
      type: "image",
      src: "5.JPG",
    },
    choices: [
      {
        text: "晴天",
        nextStage: "5.1",
      },
      {
        text: "下雨",
        nextStage: "5.2",
      },
    ],
  },
  // 做蛋糕或是放羊
  5.1: {
    id: "5.1",
    title: "晴天",
    content: "這是妳第一次擠羊奶，羊真的是很瘋狂的一個生物，到處亂踢得好可怕。但最後如果擠出很多的話還是會很開心。工作結束後你想要做什麼呢？",
    media: {
      type: "video",
      src: "5.1.MP4",
    },
    choices: [
      {
        text: "去海邊走走",
        nextStage: "6.1",
      },
      {
        text: "去散步",
        nextStage: "6.2",
      },
    ],
  },
  5.2: {
    id: "5.2",
    title: "下雨",
    content: "Kai 教你們做了德國的麵包，這是你第一次做麵包，發現做麵包用手攪拌的話手很酸。(麵包超硬)，工作結束後放晴了，你想要做什麼呢？",
    media: {
      type: "image",
      src: "5.2.JPG",
    },
    choices: [
      {
        text: "去海邊走走",
        nextStage: "6.1",
      },
      {
        text: "去散步",
        nextStage: "6.2",
      },
    ],
  },
  6.1: {
    id: "6.1",
    title: "去海邊走走",
    content: "走得時候太匆忙，什麼都沒有帶到。結果去超市買了沙灘巾跟泳衣泳褲！好險海很漂亮，曬日光浴真開心！",
    media: {
      type: "image",
      src: "6.1.JPG",
    },
    choices: [
      {
        text: "跟大家說掰掰",
        nextStage: "7",
      },
    ],
  },
  6.2: {
    id: "6.2",
    title: "去散步",
    content: "你們跟兩個小孩一起去散步，兩個小孩很可愛，一直說著法文，你們也說著法文，雖然聽不懂，但還是聊得很開心。",
    media: {
      type: "video",
      src: "6.2.MP4",
    },
    choices: [
      {
        text: "跟大家說掰掰",
        nextStage: "7",
      },
    ],
  },
  // 7: {
  //   id: "7",
  //   title: "跟大家說掰掰",
  //   content: "雖然在這裡只待了三個禮拜，但妳認為在這個地方感覺上過了好久。工作很辛苦、與小孩的相處也很開心，一起做了很多。他們也帶我們去好多地方玩。這就是你們旅程的第一站。你們很捨不得小朋友跟 Lea，但是他們永遠都會在你的回憶裡。他們帶給了你們很多回憶，希望妳可以帶著他們的祝福，繼續旅程。",
  //   media: {
  //     type: "video",
  //     src: "7.MP4",
  //   },
  //   choices: [
  //     {
  //       text: "",
  //       nextStage: "8",
  //     },
  //   ],
  // },
};

/**
 * 獲取關卡數據
 * @param {string} stageId - 關卡 ID
 * @returns {Object|null} 關卡數據
 */
export function getStage(stageId) {
  return stages[stageId] || null;
}

/**
 * 獲取起始關卡 ID
 * @returns {string} 起始關卡 ID
 */
export function getStartStage() {
  return "0";
}
