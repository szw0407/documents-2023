<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
  {
    title: '宣传页面',
    href: 'https://onlinetek-web.lnkkerst.me/',
    img: '/qrcode-site.png'
  },
  {
    title: '纳新群',
    href: 'https://qm.qq.com/q/lJye8TGb74',
    img: '/qrcode-qqgroup.png'
  },
  {
    title: '这个页面',
    href: 'https://static.lnkkerst.me/slides/onlinetek-web-2023/publicity-slides/',
    img: '/qrcode-slide.png'
  }
]);
</script>

<template>
  <div class="grid grid-cols-4 gap-0 qrcode">
    <div class="p-8">
      <img src="/qrcode-site.png" />
      <div class="grid place-items-center mt-4">
        <a
          href="https://onlinetek-web.lnkkerst.me/"
          target="_blank"
          class="mx-auto"
        >
          宣传页面
        </a>
      </div>
    </div>
    <div class="p-8">
      <img src="/qrcode-qqgroup-xls.png" />
      <div class="grid place-items-center mt-4">
        <a
          href="https://qm.qq.com/q/38qVjiYqHY"
          target="_blank"
          class="mx-auto"
        >
          纳新群（兴隆山总群）
        </a>
      </div>
    </div>
    <div class="p-8">
      <img src="/qrcode-qqgroup.png" />
      <div class="grid place-items-center mt-4">
        <a
          href="https://qm.qq.com/q/lJye8TGb74"
          target="_blank"
          class="mx-auto"
        >
          纳新群（Web 开发部）
        </a>
      </div>
    </div>
    <div class="p-8">
      <img src="/qrcode-slide.png" />
      <div class="grid place-items-center mt-4">
        <a
          href="https://static.lnkkerst.me/slides/onlinetek-web-2023/publicity-slides/"
          target="_blank"
          class="mx-auto"
        >
          这个页面
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qrcode a {
  --at-apply: 'text-3.5';
}
</style>
