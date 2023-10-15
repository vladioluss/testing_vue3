<script setup lang="ts">
import type {PropType} from "vue";

interface ButtonType {
  type: "button" | "submit" | "reset"
}

defineProps({
  type: {
    type: String as PropType<ButtonType['type']>,
    default: 'button',
  },
})
</script>

<template>
<button :type="type">
  <slot name="text">ОК</slot>
</button>
</template>

<style scoped lang="scss">
$color-accent-1-blue: #6979F8;
$color-accent-1-blue-75: #A5AFFB;

button {
  background-color: white;
  min-width: 100px;
  min-height: 30px;
  //border-radius: 5px;
  border: 1px solid $color-accent-1-blue;

  &:hover {
    cursor: pointer;
    background: $color-accent-1-blue;
    color: white;
  }

  &:active {
    background: $color-accent-1-blue-75;
  }
}
</style>