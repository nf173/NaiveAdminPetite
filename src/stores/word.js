/*
 * @Author: nanfs
 * @Date: 2023-09-11 10:35:01
 * @LastEditTime: 2023-09-11 16:54:21
 * @LastEditors: nanfs
 * @Description: 
 */
import { defineStore } from 'pinia';

export const useWordStore = defineStore('word', () => {
  const rules = [
    {
      title: '全局',
      icon: 'global',
      options: [
        { 
          key: 0,
          name: 'festival',
          label: '活动',
          icon: new URL('@/assets/images/W_01.png', import.meta.url).href,
          select: [
            { label: '无', value: 'none' },
            { label: '自动', value: 'auto' }
          ] 
        },
        {
          key: 1,
          name: 'autumn',
          label: '秋',
          icon: new URL('@/assets/images/W_02.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '长', value: 'long' },
            { label: '极长', value: 'very long' },
            { label: '随机', value: 'random' }
          ]
        },
        {
          key: 2,
          name: 'winter',
          label: '冬',
          icon: new URL('@/assets/images/W_03.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '长', value: 'long' },
            { label: '极长', value: 'very long' },
            { label: '随机', value: 'random' }
          ]
        },
        {
          key: 3,
          name: 'spring',
          label: '春',
          icon: new URL('@/assets/images/W_04.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '长', value: 'long' },
            { label: '极长', value: 'very long' },
            { label: '随机', value: 'random' }
          ]
        },
        {
          key: 4,
          name: 'summer',
          label: '夏',
          icon: new URL('@/assets/images/W_05.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '长', value: 'long' },
            { label: '极长', value: 'very long' },
            { label: '随机', value: 'random' }
          ]
        },
        {
          key: 5,
          name: 'day-and-night',
          label: '昼夜选项',
          icon: new URL('@/assets/images/W_06.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '长白天', value: 'long day' },
            { label: '长黄昏', value: 'long dusk' },
            { label: '长夜晚', value: 'long night' },
            { label: '无白天', value: 'no day' },
            { label: '无黄昏', value: 'no dusk' },
            { label: '无夜晚', value: 'no night' },
            { label: '仅白天', value: 'only day' },
            { label: '仅黄昏', value: 'only dusk' },
            { label: '仅夜晚', value: 'only night' }
          ]
        },
        {
          key: 6,
          name: 'birth-mode',
          label: '出生模式',
          icon: new URL('@/assets/images/W_07.png', import.meta.url).href,
          select: [
            { label: '绚丽之门', value: 'door' },
            { label: '随机', value: 'random' }
          ]
        },
        {
          key: 7,
          name: 'death',
          label: '冒险家死亡',
          icon: new URL('@/assets/images/W_08.png', import.meta.url).href,
          select: [
            { label: '更改冒险家', value: 'change' },
            { label: '变鬼魂', value: 'ghost' }
          ]
        },
        {
          key: 8,
          name: 'rebirth',
          label: '在绚丽之门复活',
          icon: new URL('@/assets/images/W_09.png', import.meta.url).href,
          select: [
            { label: '启用', value: 'enable' },
            { label: '禁用', value: 'disable' }
          ]
        },
        {
          key: 9,
          name: 'ghost-san-debuff',
          label: '鬼魂理智值惩罚',
          icon: new URL('@/assets/images/W_10.png', import.meta.url).href,
          select: [
            { label: '启用', value: 'enable' },
            { label: '禁用', value: 'disable' }
          ]
        },
        {
          key: 10,
          name: 'death-reset-countdown',
          label: '死亡重置倒计时',
          icon: new URL('@/assets/images/W_11.png', import.meta.url).href,
          select: [
            { label: '禁用', value: 'disable' },
            { label: '慢', value: 'slow' },
            { label: '默认', value: 'normal' },
            { label: '快', value: 'fast' },
            { label: '立刻', value: 'right now' }
          ]
        },
        {
          key: 11,
          name: 'cattle-mating-frequency',
          label: '皮弗娄牛交配频率',
          icon: new URL('@/assets/images/W_12.png', import.meta.url).href,
          select: [
            { label: '无', value: 'none' },
            { label: '很少', value: 'less' },
            { label: '默认', value: 'normal' },
            { label: '较多', value: 'more' },
            { label: '大量', value: 'lot' }
          ]
        },
        {
          key: 12,
          name: 'death-reset-countdown',
          label: '坎普斯',
          icon: new URL('@/assets/images/W_13.png', import.meta.url).href,
          select: [
            { label: '无', value: 'none' },
            { label: '很少', value: 'less' },
            { label: '默认', value: 'normal' },
            { label: '较多', value: 'more' },
            { label: '大量', value: 'lot' }
          ]
        },
      ]
    },
    {
      title: '活动',
      icon: 'festival',
      options: [
        { 
          key: 0,
          name: 'crow',
          label: '盛夏鸦年华',
          icon: new URL('@/assets/images/W_14.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 1,
          name: 'halloween',
          label: '万圣夜',
          icon: new URL('@/assets/images/W_15.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 2,
          name: 'winter-feast',
          label: '冬季盛宴',
          icon: new URL('@/assets/images/W_16.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 3,
          name: 'turkey',
          label: '火鸡之年',
          icon: new URL('@/assets/images/W_17.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 4,
          name: 'warg',
          label: '座狼之年',
          icon: new URL('@/assets/images/W_18.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 5,
          name: 'pig',
          label: '猪王之年',
          icon: new URL('@/assets/images/W_19.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 6,
          name: 'rat',
          label: '胡萝卜鼠之年',
          icon: new URL('@/assets/images/W_20.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 7,
          name: 'cow',
          label: '皮弗娄牛之年',
          icon: new URL('@/assets/images/W_21.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 8,
          name: 'raccoon',
          label: '浣猫之年',
          icon: new URL('@/assets/images/W_22.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 9,
          name: 'rabbit',
          label: '兔人之年',
          icon: new URL('@/assets/images/W_23.png', import.meta.url).href,
          select: [
            { label: '默认', value: 'normal' },
            { label: '总是', value: 'always' }
          ] 
        }
      ]
    },
    {
      title: '冒险家',
      icon: 'explorer',
      options: [
        { 
          key: 0,
          name: 'extra',
          label: '额外的起始资源',
          icon: new URL('@/assets/images/W_24.png', import.meta.url).href,
          select: [
            { label: '总是', value: 'always' }
          ] 
        },        
        { 
          key: 1,
          name: 'season-start-item',
          label: '季节起始物品',
          icon: new URL('@/assets/images/W_26.png', import.meta.url).href,
          select: [
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 2,
          name: 'birth-protection',
          label: '防骚扰出生保护',
          icon: new URL('@/assets/images/W_27.png', import.meta.url).href,
          select: [
            { label: '总是', value: 'always' }
          ] 
        },
        { 
          key: 3,
          name: 'items-drop-after-leaving',
          label: '离开后物品掉落',
          icon: new URL('@/assets/images/W_28.png', import.meta.url).href,
          select: [
            { label: '总是', value: 'always' }
          ] 
        }
      ]
    },
  ];

  const rulesModel = [
    {
      /* 地面全局 */
      'festival': 'none',  // 活动
      'autumn': 'normal',  // 秋
      'winter': 'normal',  // 冬
      'spring': 'normal',  // 春
      'summer': 'normal',  // 夏
      'day-and-night': 'normal',  // 昼夜
      'birth-mode': 'door',  // 出生模式
      'death': 'ghost',  // 冒险家死亡
      'rebirth': 'enable',  // 重生
      'ghost-san-debuff': 'enable',  // 鬼魂理智值惩罚
      'death-reset-countdown': 'normal',  // 死亡重置倒计时
      'cattle-mating-frequency': 'normal',  // 皮弗娄牛交配频率
      'death-reset-countdown': 'normal'  // 坎普斯
    },
    {
      'crow': 'normal',
      'halloween': 'normal',
      'winter-feast': 'normal',
      'turkey': 'normal',
      'warg': 'normal'
    },
    {
      'additional-resources': 'always',
      'season-start-item': 'always',
      'birth-protection': 'always',
      'items-drop-after-leaving': 'always'
    }
  ]

  return {
    rules,
    rulesModel
  }
})