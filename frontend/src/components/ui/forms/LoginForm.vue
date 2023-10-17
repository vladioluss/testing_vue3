<script setup lang="ts">
import {computed, ref} from "vue";
import BaseForm from "@/components/ui/forms/BaseForm.vue";
import BaseInput from "@/components/ui/inputs/BaseInput.vue";
import {useAuthStore} from "@/stores/modules/auth";
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import router from "@/router";

const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const errors = ref<string | null>(null)

const isValid = computed(() => username.value !== '' && password.value.length >= 8)

async function loginTo() {
  if (isValid.value) {
    let params = {
      user: username.value,
      password: password.value
    }

    // Смотрим на юзера по логину, паролю
    // авторизуюсь и перехожу на страничку заказы
    authStore.getUser(params)
        .then(() => {
          if (authStore.user) {
            router.push({ name: 'orders' })
          } else {
            errors.value = 'Неверный логин/пароль'
          }
        })
  }
}
</script>

<template>
  <div class="login-form">
    <BaseForm>
      <template #inputs>
        <BaseInput
            :type="'text'"
            :id="'login'"
            :label="'Пользователь'"
            :placeholder="'Введите Username'"
            v-model="username"
        />
        <BaseInput
            :type="'password'"
            :id="'password'"
            :label="'Пароль'"
            :placeholder="'Введите Password'"
            v-model="password"
        />
      </template>
      <template #buttons>
        <BaseButton
            :disabled="!isValid"
            :type="'button'"
            @click.prevent="loginTo"
        >
          <template #text>Войти</template>
        </BaseButton>
      </template>
    </BaseForm>

    <div v-if="errors" class="error-message">{{ errors }}</div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  max-width: 500px;
  background: #D9D9D9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>