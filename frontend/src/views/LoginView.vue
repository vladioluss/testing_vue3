<script setup lang="ts">
import LoginForm from "@/components/ui/forms/LoginForm.vue";
</script>

<template>
  <div class="wrapper">
    <LoginForm/>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>