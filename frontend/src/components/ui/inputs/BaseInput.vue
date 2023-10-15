<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String||Number,
  placeholder: String,
})
</script>

<template>
  <div class="group-input">
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.group-input {
  $color-neutral-1-dark: #1A051D;
  $color-neutral-1: #ECEBED;
  $color-neutral-1-light: #D0C9D6;

  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: space-between;
  align-items: baseline;

  input {
    width: 240px;
    height: 35px;
    color: $color-neutral-1-dark;
    outline: none;
    border: 1px $color-neutral-1 solid;
    border-radius: 5px;
    padding-left: 10px;

    &:focus {
      border: 1px $color-neutral-1-light solid;
    }

    &::placeholder {
      color: $color-neutral-1-light;
    }
  }
}
</style>