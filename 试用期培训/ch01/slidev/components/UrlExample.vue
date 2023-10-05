<template>
  <div>
    <div class="inline-block text-red-500">
      <span>https://</span>
      <div class="absolute">协议</div>
    </div>
    <div class="inline-block text-yellow-500">
      <span>cn.bing.com</span>
      <div class="absolute">域名</div>
    </div>
    <div class="inline-block text-green-400">
      <span>:443</span>
      <span>/</span>
      <div class="absolute pl">
        <span class="relative" :style="{ left: '-16px' }">端口号</span>
      </div>
    </div>
    <div class="inline-block text-blue-400">
      <span>search</span>
      <div class="absolute pl-2">路径</div>
    </div>
    <div class="inline-block text-pink-400">
      <span>?q=hello+world</span>
      <div class="absolute pl-4">查询字符串</div>
    </div>
    <div class="inline-block text-purple-500">
      <span>#xxx</span>
      <div class="absolute">锚点</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
