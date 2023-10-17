import {ref} from 'vue'
import {defineStore} from 'pinia'
import {getItems} from "@/app/api";
import type {EventInterface} from "@/types/order";

const URL: string = 'events'

export const useEventsStore = defineStore('events', () => {
  const events = ref<EventInterface[]>([])

  async function getEvents() {
    await getItems(URL, {})
      .then((res) => {
        events.value = res.data
      })
  }

  /*async function postEvent(params) {
    await postItem(URL, params)
      .then(res => res)
  }*/

  return {
    events,
    getEvents,
    // postEvent,
  }
})