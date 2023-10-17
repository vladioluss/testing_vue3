<script setup lang="ts">
import BaseForm from "@/components/ui/forms/BaseForm.vue";
import BaseButton from "@/components/ui/buttons/BaseButton.vue";
import BaseInput from "@/components/ui/inputs/BaseInput.vue";
import {computed, ref} from "vue";
import router from "@/router";
import {usePreloaderStore} from "@/stores/modules/base";
import {postItem} from "@/app/api";
import type {EventInterface} from "@/types/order";
import {useAuthStore} from "@/stores/modules/auth";

const auth = useAuthStore()

const URL: string = 'events'

// Данные для формы
const name = ref<string | undefined>(auth.user?.name || '')
const address = ref<string>('')
const comment = ref<string>('')
const status: string = 'Новый'
let date: string = new Date().toLocaleDateString('ru-RU', {
  day: "numeric",
  month: "long",
  year: "numeric",
})
date = date.replace(' г.', '')

// const eventsStore = useEventsStore()
const preloader = usePreloaderStore()

const errors = ref<string | null>(null)
const valid = computed<boolean>(() => name.value !== '' && address.value !== '')

function createEvent(): void {
  if (valid.value) {
    // ВКЛ прелоадер
    preloader.setActivePreloader(true)

    const params: EventInterface = {
      'name': name.value,
      'address': address.value,
      'date': date,
      'status': status,
      'comment': comment.value,
    }

    // Добавляем запись в БД
    postItem(URL, params)
        .then(() => router.push({name: 'orders'}))
        .finally(() => preloader.setActivePreloader(false))
  } else {
    errors.value = 'Заполните обязательные поля'
  }
}
</script>

<template>
  <div class="add-order">
    <p>Добавить заказ</p>
    <BaseForm>
      <template #inputs>
        <BaseInput
            required
            :type="'text'"
            :placeholder="'Введите ваше имя'"
            :label="'Ваше имя*'"
            v-model="name"
        />
        <BaseInput
            required
            :type="'text'"
            :placeholder="'Введите ваш адрес'"
            :label="'Ваш адрес*'"
            v-model="address"
        />
        <BaseInput
            :type="'text'"
            :placeholder="'Комментарий'"
            :label="'Комментарий'"
            v-model="comment"
        />
      </template>
      <template #buttons>
        <BaseButton @click="createEvent">
          <template #text>Добавить заказ</template>
        </BaseButton>
      </template>
    </BaseForm>
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

<style scoped lang="scss">
.add-order {
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>