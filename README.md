# <center> Naive Admin Petite </center>

<center> 一款轻量级、高颜值的 Naive UI 后台管理面板，使用 Vite + Vue3 + Pinia 构建，适用于中小型项目快速二次开发</center>

<center style="height: 20px; margin: 20px 0;">
<a href="https://github.com/nf173/NaiveAdminPetite/blob/main/LICENSE"><img src="https://img.shields.io/github/license/nf173/NaiveAdminPetite"></a>
</center>

演示站：[www.naive-admin-petite.site](https://naive-admin-petite.site '颜值超高的后台管理系统')


## 特性
✅ <font style="color: #333; background: #eee; padding: 2px 5px; border-radius: 3px;">亮色</font> - <font style="color: #fff; background: #333; padding: 2px 5px; border-radius: 3px;">暗夜</font> 主题切换 <br>✅ 提供 顶部 - 侧边 两种菜单栏模式 <br>✅ 面包屑导航 <br>✅ 支持可拖拽多页标签栏 <br>✅ 支持页面锁屏 <br>✅ 基于 Axios 封装的请求函数,以 Promise 形式返回 <br>✅ 权限菜单：静态路由 + 动态路由(Mock) <br>✅ 页面缓存: 在路由配置中添加 `meta: { cache: true }` <br>✅ 封装 403、404、500 错误页路由组件 <br>✅ 封装 SvgIcon 组件，更简单地使用图标 <br>✅ 图形验证码 (需要后端支持) <br>✅ 支持 Markdown 文档预览 <br>✅ pinia 持久化存储 <br>🏗️ 更多功能正在马不停蹄开发中...


## 项目部署
### 安装
**拉取项目**
```
git clone https://github.com/nf173/NaiveAdminPetite.git
```
**下载依赖**

```
npm install
```

### 启动
**使用mock数据**

```
npm run mock

VITE v4.3.8  ready in 979 ms
➜  Local: http://localhost:8888
```
默认端口：8888

### 打包
```
npm run build
```

## 其他
该项目暂为测试版本，欢迎各位提交 Issues，本人倾力长期维护...
