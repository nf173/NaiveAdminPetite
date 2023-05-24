# Melon

依据个人开发习惯配置的一个基于vite的项目模板。

## 路由：<a href="https://router.vuejs.org/zh/">VueRouter</a>

## 状态管理：<a href="https://pinia.vuejs.org/zh/">Pinia</a>

## 网络请求：<a href="https://www.axios-http.cn/">Axios</a>

## CSS预编译器: <a href="https://www.sass.hk/">SASS</a>
## 预置组件:

### SvgIcon
基于 vite-plugin-svg-icons 插件封装的 SvgIcon 组件，只需提供与 `/assets/icons/[name].svg` 下同名 `name` 属性，即可显示图标。

```js
import SvgIcon from '@/components/SvgIcon.vue'

<template>
  <SvgIcon :name="name" :size="20" :color="color"></SvgIcon>
</template>
```

## 预置工具函数:

### delay.js
使用 `Promise` 包装的计时器函数。

```js
import { delay } from '@/utils'

delay(3000).then(res=>{
  console.log('计时结束！')
})
```

## 安装使用

克隆项目模板：`git clone https://github.com/nf173/Melon.git`

安装依赖：`npm install`

