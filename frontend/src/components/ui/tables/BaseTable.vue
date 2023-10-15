<script setup lang="ts">
import type {TableProps} from "@/types/table";
const { headers }: TableProps = defineProps(['headers'])
</script>

<template>
  <table>
    <thead>
      <tr class="tr">
        <slot name="headers">
          <th
              v-for="(header, inx) in headers"
              :key="inx"
          >
            {{ header }}
          </th>
        </slot>
      </tr>
    </thead>
    <tbody>
    <slot name="rows"></slot>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  background-color: white;
}

th {
  background-color: #D9D9D9;
  font-weight: bold;
  border: 1px solid black;
  padding: 5px;
}
</style>