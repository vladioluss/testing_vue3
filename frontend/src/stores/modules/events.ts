import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {getItems, postItem} from "@/app/api";

const URL: string = 'events'

export const useEventsStore = defineStore('events', () => {
  const events = ref([])

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