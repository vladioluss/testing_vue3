<script setup lang="ts">
import {useRoute} from 'vue-router'
import type {Component} from "vue";
import {computed} from "vue";
import MainLayout from "@/app/layouts/MainLayout.vue";
import EmptyLayout from "@/app/layouts/EmptyLayout.vue";


const route = useRoute()

// Все ЛейАуты
const layouts: Record<string, Component> = {
  'MainLayout': MainLayout,
  'EmptyLayout': EmptyLayout,
}

// Определение ЛА
const layout = computed(() => {
  return layouts[`${route.meta?.layout || 'Main'}Layout`]
})
</script>

<template>
  <component :is="layout"/>
</template>

<style scoped>
</style>
