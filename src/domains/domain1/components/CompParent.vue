<template>
  <div>
    <span>Parent</span>
    <Comp1 />
  </div>
</template>

<script setup lang="ts">
import Comp1 from "./section1/Comp1.vue";
// нельзя импортировать компонент из другого домена напрямую
// import Domain2Comp from "@/domains/domain2/components/Domain2Comp.vue";
// но можно экспортировать из index.ts
import Domain2ExportedComp from "@/domains/domain2/index";

// можно импортировать любые shared-файлы
import {sharedFunc} from "@/shared/shared1";
</script>

<style scoped></style>