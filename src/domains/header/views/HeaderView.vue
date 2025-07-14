<template>
	<div class="header">
    <LogoComponent />
    <div>HeaderView</div>
  </div>
</template>

<script setup lang="ts">
import LogoComponent from "@/domains/header/components/LogoComponent.vue";

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}
</style>
