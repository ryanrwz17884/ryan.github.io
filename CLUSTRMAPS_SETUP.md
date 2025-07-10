# 🗺️ ClustrMaps 设置指南

## 快速开始

你的网站已经集成了ClustrMaps访问者地图！当前使用的是演示地图ID。

## 获取你自己的地图

### 1. 注册ClustrMaps账户
- 访问 [ClustrMaps官网](https://clustrmaps.com)
- 点击 "Sign Up" 注册账户
- 填写你的网站信息

### 2. 获取地图代码
- 登录后，在仪表板中找到你的网站
- 点击 "Get Map Code"
- 复制你的地图ID（类似 `d=ABC123DEF456...`）

### 3. 更新网站代码
在 `_pages/about.md` 文件中，找到这样的代码：
```javascript
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=YOUR_MAP_ID"></script>
```

将 `YOUR_MAP_ID` 替换为ClustrMaps提供给你的地图ID。

**✅ 你的地图已经设置完成！** 当前使用的是你自己的地图ID：`PecDbEsUBjlocEB-2mrz16HPZdOY5KUnHF4jo4c_VPE`

## 地图选项

你可以在ClustrMaps仪表板中自定义：
- 🎨 地图样式和颜色
- 📊 显示的统计信息
- 🌍 地图缩放级别
- 📱 移动设备适配

## 隐私设置

ClustrMaps会收集以下信息：
- 访问者的IP地址（用于地理定位）
- 访问时间
- 页面浏览次数

**注意**: 这些数据是匿名的，不会收集个人身份信息。

## 常见问题

**Q: 地图不显示怎么办？**
A: 检查网络连接，确保没有广告拦截器阻止脚本加载。

**Q: 数据多久更新一次？**
A: ClustrMaps通常会在几分钟内更新访问数据。

**Q: 可以查看详细统计吗？**
A: 登录ClustrMaps仪表板可以查看详细的访问统计和分析。

**Q: 如何删除或停用地图？**
A: 在 `_pages/about.md` 中删除整个 "Global Visitors Map" 部分即可。

---

**就是这么简单！** 🚀 ClustrMaps会自动开始收集访问者数据并在地图上显示。 