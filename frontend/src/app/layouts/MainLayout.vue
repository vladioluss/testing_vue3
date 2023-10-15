<script setup lang="ts">
import TheHeader from "@/components/app/TheHeader.vue";
import ThePreloader from "@/components/preloader/ThePreloader.vue";
import {usePreloaderStore} from "@/stores/modules/base";
import {useErrorsStore} from "@/stores/modules/errors";
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import {computed} from "vue";


const preloader = computed(() => usePreloaderStore().active)
const errors = computed(() => useErrorsStore().errors)
</script>

<template>
  <TheHeader/>
  <main>
    <div class="content-wrapper">
      <router-view :key="$route.fullPath"/>
    </div>
  </main>

  <!--Прелоадер-->
  <ThePreloader v-if="preloader"/>

  <!--Вывод экрана ошибок-->
  <div
      class="error"
      v-if="errors"
  >
    <div class="error__block">
      <BaseButton
          class="close"
          :type="'button'"
          @click="useErrorsStore().setError('')"
      />
      <h2>Ошибка сервера</h2>
      <p>{{ errors }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.error {
  background: #c09c5a;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  top: 0;
  left: 0;

  span,
  h2 {
    z-index: 10000;
    color: black;
  }
}

.close {
  position: absolute;
  right: 30px;
  top: 30px;
  border: #181818 1px solid;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background: #ffcc71;
  }
}
</style>