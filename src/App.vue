<template>
  <div class="app">
    <HeaderView />
    <div class="app-content">Content</div>
    <FooterView />
  </div>
</template>

<script setup lang="ts">
import FooterView from '@/domains/footer';
import HeaderView from '@/domains/header/views/HeaderView.vue';
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: #000000;
  background: #ffffff;
  transition:
      color 0.5s,
      background-color 0.5s;
  line-height: 1.6;
  font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.app-content {
  flex-grow: 1;
}
</style>
