<script setup lang="ts">
import BaseButton from "@/components/ui/buttons/BaseButton.vue";

defineEmits(['submit'])
</script>

<template>
  <form>
    <slot name="inputs"></slot>
    <slot name="buttons">
      <BaseButton
          @click.prevent="$emit('submit')"
          :type="'button'"
      />
    </slot>
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}
</style>