---
theme: seriph
background: /head-bg-mocha.jpg
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
title: Welcome to Slidev
mdc: true
routerMode: hash
export:
  format: pdf
  dark: false
  withClicks: false
download: true
---

# 欢迎加入 Web 开发部！

Welcome to 0nlineTek-Web!

带你走进互联网背后的精彩世界。

<div class="abs-br m-6 flex gap-2">
  <div class="bg-white bg-opacity-10 p-4 rounded-xl grid grid-cols-2 gap-4">
    <div>
      <img class="h-24" src="/qrcode-qqgroup.png"/>
      <div class="mt-2">
        纳新 QQ 群
      </div>
    </div>
    <div>
      <img class="h-24" src="/qrcode-site.png"/>
      <div class="mt-2">
        宣传网页
      </div>
    </div>
  </div>
</div>

---

# 什么是 Web ？

What's WEB?

<div class="relative h-36">
  <div v-click-hide class="absolute indent-8">

Web，全名为World Wide Web（万维网），是一种基于互联网的信息交流和共享系统。它由一系列相互关联的超文本文档组成，并通过超链接（hyperlink）相互连接。通过Web，用户可以访问和浏览世界各地的网页、图像、音频、视频和其他多媒体内容。

  </div>
  <div v-after class="absolute indent-8">

~~Web，全名为World Wide Web（万维网），是一种基于互联网的信息交流和共享系统。它由一系列相互关联的超文本文档组成，并通过超链接（hyperlink）相互连接。通过Web，用户可以访问和浏览世界各地的网页、图像、音频、视频和其他多媒体内容。~~

  </div>
</div>

<div v-click>

不那么严谨但通俗地来讲，我们浏览的各种网站算是 Web，使用的各种小程序也算 Web。

~~再广义一点，手机电脑上用的 APP 也算是 Web~~

</div>

---

# 什么是 Web 开发？

What's Web development?

- 使用 Web 相关技术开发开发互联网应用程序或网站。
- 覆盖测试、设计、测试和维护等多方面的技术和艺术。

<div v-click>

- 前端：
  - 用户与之交互的部分，即网站或应用程序的外观和功能，侧重设计和审美。
  - 学习 Web 开发三件套（HTML, CSS, JavaScript），Vue，uni-app 等。
  - 将页面设计转化为可视化和交互性的网页或小程序，为用户提供流畅的浏览体验。
- 后端：
  - 网站或应用程序的“大脑”，负责具体业务逻辑和数据处理。
  - 我们使用 Python 作为后端开发语言，减轻学习负担，提前给大家预热。
  - 还需学习数据库、运维等相关的知识。

</div>

---
clicks: 1
---

# 在这里，你将得到

What you wall get.

- 学长学姐手把手指导，每时每刻在线答疑，保姆级教学团队。
- 良好的交流平台，绝不枯燥的自我提升过程。
- 与学线其他团队共同协作，策划、宣传、运营、美工等众多部门，更多挑战自己的机会。
- 丰富的团建活动
  - 迎新大会、狂欢夜、主办活动、聚餐、办公室。。。

<div v-if="$clicks > 0" class="grid grid-cols-4 gap-4 mt-8">
<img v-motion-roll-left :duration="200" src="/tj-1.jpg"/>
<img v-motion-slide-bottom :duration="200" src="/tj-2.jpg"/>
<img v-motion-pop :duration="200" src="/tj-3.jpg"/>
<div class="relative">
  <img v-motion-roll-right :duration="200" class="h-24 absolute right-0 bottom-0" src="/tj-4.jpg"/>
</div>
</div>

---

# 链接们

Links

<QrCodes></QrCodes>
