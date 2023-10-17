<script setup lang="ts">
import BaseTable from "@/components/ui/tables/BaseTable.vue";
import BaseModal from "@/components/ui/modals/BaseModal.vue";
import {ref} from "vue";
import {useEventsStore} from "@/stores/modules/events";
import {useAuthStore} from "@/stores/modules/auth";
import {useErrorsStore} from "@/stores/modules/errors";
import {delItem, putItem} from "@/app/api";
import type {EventInterface} from "@/types/order";


// Главный роут
const URL: string = 'events'

// Сторы для получения данных
const eventsStore = useEventsStore()
const userStore = useAuthStore()

// Получаем все заказы
eventsStore.getEvents()

// Выбранный заказ
const currEvent = ref<EventInterface | null>(null);


// Шапка таблички
const tableHeaders: string[] = [
  '№',
  'Имя клиента',
  'Адрес',
  'Дата заказа',
  'Статус',
  'Комментарий',
]

const doneStatus: string = 'Выполнен'

// сортировка по умолчанию
let ascending = ref(false)
// Сортировка по полю
function sortByField(key: string) {
  ascending.value = !ascending.value;

  // Определенные поля сортировки
  const sortingKey: string | undefined = {
    'Адрес': 'address',
    'Дата заказа': 'date',
  }[key];

  if (!sortingKey) return;

  eventsStore.events.sort((a, b) => {
    const aValue: string = a[sortingKey];
    const bValue: string = b[sortingKey];

     // Сравнения строк
    return ascending.value ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
}

// Открытие/закрытие модалки
const active = ref(false)

// Удаление заказа
function delEvent(id: number | object): void {
  delItem(`${URL}/${id}`)
      .then(() => eventsStore.getEvents())
      .catch(err => useErrorsStore().setError(err))
}

// Смена статуса
function setStatus(row: EventInterface): void {
  let params = {
    ...row,
    status: doneStatus,
  }

  putItem(`${URL}/${params.id}`, params)
      .then(() => eventsStore.getEvents())
      .catch(err => useErrorsStore().setError(err))
}
</script>
<template>
  <div class="table">
    <BaseTable>
      <template #headers>
        <th
            v-for="header in tableHeaders"
            :key="header"
            @click="sortByField(header)"
        >
          {{ header }}
        </th>
        <th
            class="actions-row"
            v-if="userStore.isAdmin"
        ></th>
      </template>
      <template #rows>
        <tr
            v-for="row in eventsStore.events"
            :key="row.id"
            :class="row.status === doneStatus ? 'status-done' : ''"
        >
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.address }}</td>
          <td>{{ row.date }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.comment }}</td>
          <td v-if="userStore.isAdmin">
            <div class="actions-btns">
              <div
                  class="action done"
                  @click.prevent="setStatus(row)"
                  v-if="row.status !== doneStatus"
              >V
              </div>
              <div
                  class="action del"
                  @click.prevent="(
                      active = true,
                      currEvent = row.id
                  )"
              >X
              </div>
            </div>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>

  <!--Модалка с удалением заказа-->
  <BaseModal
      v-model="active"
      @ok-btn="delEvent(currEvent.id)"
  />
</template>

<style scoped lang="scss">
.table {
  width: 80%;
  overflow: auto;

  tr {
    &:hover {
      background-color: rgba(10, 10, 10, 0.1);
    }
  }

  th {
    background-color: #D9D9D9;
    font-weight: bold;
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
  }

  .sortable {
    position: relative;

    &.asc::after {
      content: '▲';
      position: absolute;
      right: 5px;
    }

    &.desc::after {
      content: '▼';
      position: absolute;
      right: 5px;
    }
  }

  td {
    border: 1px solid black;
    padding: 8px;
  }
}

.status-done {
  color: #D0C9D6;
}

.actions-row {
  width: 80px;
}

.actions-btns {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .action {
    border: #2c3e50 1px solid;
    padding: 0 7px;
    cursor: pointer;
  }

  .done:hover {
    &:hover {
      background-color: #00C48C;
      color: white;
    }
  }

  .del {
    &:hover {
      background-color: #FF647C;
      color: white;
    }
  }
}
</style>