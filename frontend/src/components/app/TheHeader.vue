<script setup lang="ts">
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import router from "@/router";
import {useAuthStore} from "@/stores/modules/auth";


const auth = useAuthStore()

function logout() {
  auth.logout()
  router.push({ name: 'login'})
}
</script>

<template>
  <header>
    <div class="header-row">
      <div class="item">
        <router-link to="/orders">Все заказы</router-link>
        <router-link to="/add-orders">Добавить заказ</router-link>
      </div>
      <div class="item">
        <div v-if="auth?.user?.name">{{ auth.user.name }}</div>
        <BaseButton
            :type="'button'"
            @click="logout"
        >
          <template #text>Выйти</template>
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background: #165996;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  color: white;

  .header-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-content: center;
  }
}

.item {
  display: flex;
  gap: 40px;

  div {
    cursor: pointer;
  }
}
</style>