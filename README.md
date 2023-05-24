# Melon

依据个人开发习惯配置的一个基于vite的项目模板。

## 路由：VueRouter

## 状态管理：Pinia

## 网络请求：Axios

## 预置组件:

### SvgIcon
基于 vite-plugin-svg-icons 插件封装的 SvgIcon 组件，只需提供与 `/assets/icons/[name].svg` 下同名 `name` 属性，即可显示图标。

## 预置工具函数:

### delay.js
使用 `Promise` 包装的计时器函数。

用法：
```js
import { delay } from '@/utils'

delay(3000).then(res=>{
  console.log('计时结束！')
})
```

## 安装使用

`npm install Melon`

