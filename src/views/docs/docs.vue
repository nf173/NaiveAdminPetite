<template>
  <div class="help-doc">
    <n-card :bordered="false" title="项目文档">
      <vi-markdown :text="readme"></vi-markdown>
    </n-card>
  </div>
</template>

<script setup>
const readme = ref(`
# <center> Naive Admin Petite </center>

<center> 一款轻量级、高颜值的 Naive UI 后台管理面板，使用 Vite + Vue3 + Pinia 构建，适用于中小型项目快速二次开发</center>

<center style="margin-top: 20px;">
<a href="https://github.com/nf173/NaiveAdminPetite/blob/main/LICENSE"><img src="https://img.shields.io/github/license/nf173/NaiveAdminPetite"></a>
</center>

> 在线预览: [naive-admin-petite.site](https://www.naive-admin-petite.site)

## 功能

- <font style="background: #eeeeee; padding: 2px 5px; border-radius: 3px;">亮色</font> - <font style="color: #ffffff; background: #333333; padding: 2px 5px; border-radius: 3px;">暗夜</font> 主题切换 ✅
- 提供 顶部 - 侧边 两种菜单栏模式 ✅
- 整站页面锁屏 ✅
- 权限菜单：静态路由 + 动态路由 ✅
- 路由缓存: 在要缓存的路由配置中添加 <code jascript>meta: { cache: true }</code> ✅
- 封装 403、404、500 错误页路由组件 ✅
- 封装 SvgIcon 组件，更简单地使用图标 ✅
- 封装面包屑导航 ✅
- 封装图形验证码组件（需要后端支持）✅
- 封装 TabsView 组件，多页标签栏 ✅
- 支持 Markdown 预览 ✅
- pinia 持久化存储 ✅
- 🏗️更多功能正在马不停蹄开发中...

## 项目部署

### 安装

**拉取项目**

<pre>git clone https://github.com/nf173/NaiveAdminPetite.git</pre>

**下载依赖**

<pre>npm install</pre>

### 启动

**使用mock数据**

<pre>
npm run mock

VITE v4.3.8  ready in 979 ms
➜  Local: http://localhost:8888
</pre>
默认启动端口：8888

### 打包

<pre>
npm run build

npm run preview
</pre>

## 其他

该项目暂为测试版本，欢迎各位提交 Issues，本人倾力长期维护...
`);
</script>