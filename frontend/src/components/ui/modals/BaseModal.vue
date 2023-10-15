<script setup lang="ts">
import BaseButton from "@/components/ui/buttons/BaseButton.vue";


defineProps(['modelValue'])
</script>

<template>
  <div
      class="modal"
      v-if="modelValue"
  >
    <div class="body">
      <slot name="body">
        <h2>Вы действительно хотите удалить заказ?</h2>
      </slot>

      <slot name="footer">
        <div class="footer__btns">
          <BaseButton
              :type="'button'"
              @click.prevent="(
                  $emit('update:modelValue', false),
                  $emit('okBtn', 1)
              )"
          />
          <BaseButton
              :type="'button'"
              @click.prevent="$emit('update:modelValue', false)"
          >
            <template #text>Отмена</template>
          </BaseButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(226, 225, 225, .9);
  align-items: center;
  justify-content: center;

  .body {
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
  }

  .footer__btns {
    display: flex;
    gap: 10px;
  }
}
</style>