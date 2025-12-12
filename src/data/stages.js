/**
 * 關卡數據定義
 * 主線：1 -> 2 -> 3 -> 4 -> 5
 * 支線：1.1, 1.2 等會多看到一些內容，但最終都會回到主線
 */

export const stages = {
  // 第0關 - 起始關卡
  0: {
    id: "0",
    title: "妳的夢想",
    content:
      "妳一直有一個夢想，妳希望可以趁年輕的時候去看看世界，在世界遙遠的角落體驗新的感受，也希望可以重拾大學學的法文。妳終於下定決心，準備前往夢想中的國度。",
    media: {
      type: "image",
      src: "0.JPG",
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
    title: "抉擇",
    content: "請問妳會獨自前往，還是希望有男朋友的陪伴呢？",
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
    content:
      "你們住的地方是一個小木屋，一進來的蚊子多到爆，而且沒有廁所，你覺得怎麼樣呢？",
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
    content:
      "main house 的外面還是很漂亮，外面的吊床跟鞦韆也非常可愛。看起來是除了睡覺以外的時�間都可以在這裡度過。明天要開始工作了，妳希望明天的天氣怎麼樣呢？",
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
    content:
      "這是妳第一次擠羊奶，羊真的是很瘋狂的一個生物，到處亂踢得好可怕。但最後如果擠出很多的話還是會很開心。工作結束後你想要做什麼呢？",
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
    content:
      "Kai 教你們做了德國的麵包，這是你第一次做麵包，發現做麵包用手攪拌的話手很酸。(麵包超硬)，工作結束後放晴了，你想要做什麼呢？",
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
    content:
      "走得時候太匆忙，什麼都沒有帶到。結果去超市買了沙灘巾跟泳衣泳褲！好險海很漂亮，曬日光浴真開心！",
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
    content:
      "你們跟兩個小孩一起去散步，兩個小孩很可愛，一直說著法文，你們也說著法文，雖然聽不懂，但還是聊得很開心。",
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
  7: {
    id: "7",
    title: "跟大家說掰掰",
    content:
      "雖然在這裡只待了三個禮拜，但妳認為在這個地方感覺上過了好久。工作很辛苦、與小孩的相處也很開心，一起做了很多。他們也帶我們去好多地方玩。這就是你們旅程的第一站。你們很捨不得小朋友跟 Lea，但是他們永遠都會在你的回憶裡。他們帶給了你們很多回憶，希望妳可以帶著他們的祝福，繼續旅程。請問妳下一站想要去哪裡呢?",
    media: {
      type: "image",
      src: "7.JPG",
    },
    choices: [
      {
        text: "H 哥家",
        nextStage: "7.1",
      },
      {
        text: "有游泳池還有自己房間廁所的地方",
        nextStage: "7.2",
      },
    ],
  },
  7.1: {
    id: "7.1",
    title: "H 哥家",
    content:
      "到了 H 哥家，吃的東西突然變好吃了，他決定要做 BBQ，你們很感動，因為在 K 哥家都吃不到好吃的東西",
    media: {
      type: "video",
      src: "7.1.MP4",
    },
    choices: [
      {
        text: "開始工作",
        nextStage: "8",
      },
    ],
  },
  7.2: {
    id: "7.2",
    title: "有游泳池還有自己房間廁所的地方",
    content:
      "你們看到自己的房間很感動，因為旁邊就是自己的廁所，而且床也很舒服，沒有蚊帳掛在旁邊。房間外看出去就是游泳池也很讓人興奮。",
    media: {
      type: "image",
      src: "7.2.JPG",
    },
    choices: [
      {
        text: "開始工作",
        nextStage: "8",
      },
    ],
  },
  8: {
    id: "8",
    title: "開始工作",
    content:
      "工作跟 K 哥家相比輕鬆很多，H 哥也會定期來跟你們說:'That's lovely! You did a great job!'下午有一些時間，你想要怎麼安排?",
    media: {
      type: "image",
      src: "8.JPG",
    },
    choices: [
      {
        text: "游泳",
        nextStage: "8.1",
      },
      {
        text: "跟H哥出去走走",
        nextStage: "8.2",
      },
      {
        text: "騎腳踏車",
        nextStage: "8.3",
      },
    ],
  },
  8.1: {
    id: "8.1",
    title: "游泳",
    content:
      "妳想要開始學游泳，H哥跟冠傑有教你一些技巧，妳確實有進步很多，相信妳未來一定可以成為游泳高手！",
    media: {
      type: "video",
      src: "8.1.MP4",
    },
    choices: [
      {
        text: "跟H哥一起吃晚餐",
        nextStage: "9",
      },
    ],
  },
  8.2: {
    id: "8.2",
    title: "H哥導覽",
    content:
      "H哥帶你們出去走走，他的步調很快，看一看就走掉，唯一停下來的地方是冰淇淋店，妳們在這裡吃了冰淇淋，蠻好吃的！",
    media: {
      type: "image",
      src: "8.2.JPG",
    },
    choices: [
      {
        text: "回家一起吃晚餐",
        nextStage: "9",
      },
    ],
  },
  8.3: {
    id: "8.3",
    title: "出去騎腳踏車",
    content:
      "其時妳也不想騎腳踏車，但你們吹風機壞掉了，想說可以簡單騎一下買個吹風機，沒想到屁股快開花了。",
    media: {
      type: "image",
      src: "8.3.JPG",
    },
    choices: [
      {
        text: "回家一起吃晚餐",
        nextStage: "9",
      },
    ],
  },
  9: {
    id: "9",
    title: "Raclette 初體驗",
    content:
      "H 哥家有 Raclette 的機器，這是你們第一次體驗到的瑞士美食，有鮭魚跟蝦子，超級好吃！",
    media: {
      type: "video",
      src: "9.MP4",
    },
    choices: [
      {
        text: "去看看貓貓",
        nextStage: "10",
      },
    ],
  },
  10: {
    id: "10",
    title: "道別",
    content:
      "三個禮拜過得很快，你們準備要離開了。但因為你們覺得 H 哥家很不錯，所以決定秋天時再來一次。我們也來跟Ginger道別，跟他說我們下次見。",
    media: {
      type: "video",
      src: "10.MOV",
    },
    choices: [
      {
        text: "去波爾多玩囉！",
        nextStage: "100",
      },
    ],
  },
  100: {
    id: "100",
    title: "寶貝生日快樂！",
    content: "很抱歉，我的目標是希望能夠把這個完成我們到現在的旅程，但發現真的來不及(很早開始做，要瞞著妳早上做的時間也不太夠:(真的非常抱歉)。我還想告訴你很多話，從後面開始就不會有選項了，你如果玩到這邊想要從頭選其他選項的話，可以按第一個按鈕，或是繼續聽我給妳的生日祝福！",
    media: {
      type: "image",
      src: "100.JPG",
    },
    choices: [
      {
        text: "從頭",
        nextStage: "0",
      },
      {
        text: "繼續聽我想說的話",
        nextStage: "101",
      },
    ],
  },
  101: {
    id: "101",
    title: "妳最棒!",
    content: "我很高興妳有想要來法國的這個想法，我也很開心能夠跟妳一起經歷這趟旅程。我們真的認識了好多好多好棒的人，看了好多好美的景色。認識好多平常不會認識的外國人、外國馬、外國貓、外國狗。在這趟旅程能夠感受到我們都在成長，我相信這趟旅程會成為妳一輩子的養分。我希望妳能夠繼續保持這樣的初心，繼續探索這個世界，對所有的人事物充滿信心。",
    media: {
      type: "image",
      src: "101.JPG",
    },
    choices: [
      {
        text: "下一頁",
        nextStage: "102",
      },
    ],
  },
  102: {
    id: "102",
    title: "我最愛妳",
    content: "雖然我們途中遇到了很多困難、也有過一些不開心的時刻。但我們都會一起度過，不論妳難過、生氣、開心、感動、失望、悲傷、快樂、興奮，我都會陪在妳身邊。",
    media: {
      type: "video",
      src: "102.MP4",
    },
    choices: [
      {
        text: "下一頁",
        nextStage: "103",
      },
    ],
  },
  103: {
    id: "103",
    title: "一起加油",
    content: "這趟旅程還剩下一些時間，我希望妳可以非常享受。因為我知道，不論重來多少次，我們一定還是會選擇一起來歐洲，度過奇幻的生活。如果沒有來過，我的生命中居然會少了這麼多美好的事情和人，真是無法想像。我希望我們在未來都能夠成為跟我們遇到的人一樣好的人，未來也要像這樣善待每個人。",
    media: {
      type: "image",
      src: "103.JPG",
    },
    choices: [
      {
        text: "下一頁",
        nextStage: "104",
      },
    ],
  },
  104: {
    id: "104",
    title: "❤️",
    content: "不要生氣了啦，我最愛妳❤️",
    media: {
      type: "video",
      src: "104.MP4",
    },
    choices: [
      {
        text: "回到第一頁",
        nextStage: "0",
      },
    ],
  },
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
