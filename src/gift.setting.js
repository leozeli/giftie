
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '520送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '这是第一行文案', },
    { key: 's', wording: '这是第二行文案', },
    { key: 'd', wording: '然后，这里是第三行文案', },
  ],
  // 最终解释权归属人
  owner: 'XXX',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'QQ会员', alias: 'QQ', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '爱奇艺视频终身VIP', alias: 'VIP', image: '/images/2.png',  description: '“为你承包一辈子的 VIP”' },
  { key: 'e', name: 'SK2套装', alias: 'SK2', image: '/images/3.png',  description: '「强维稳，快修护」' },
  { key: 'r', name: '52.0红包', alias: '520', image: '/images/6.png',  description: '“大红包”' },
  { key: 't', name: '包', alias: '包', image: '/images/5.png',  description: '「你懂的」' },
  { key: 'y', name: '两百', alias: '两百', image: '/images/6.png',  description: '“你懂的”' },
  { key: 'u', name: 'UR购物券：¥1,000', alias: 'UR', image: '/images/7.png',  description: '“UR！买！”' },
  { key: 'i', name: 'Dyson美发套装', alias: '戴森', image: '/images/8.png',  description: '「不同造型需求，全面满足」' },
];
