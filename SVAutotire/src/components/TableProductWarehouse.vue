

<template lang="html">
        <div class="flex items-center justify-end md:space-y-0 pb-4 bg-white">
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 mx-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchItem" type="text" id="table-search-users" class="block p-2 ps-10 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="ค้นหาคลังสินค้า">
        </div>
      </div>

      <table class="w-full text-left rtl:text-right text-gray-500 ">
        <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" class="px-6 py-3 font-bold">คลังสินค้า</th>
            <th scope="col" class="px-6 py-3 font-bold">ที่เก็บ</th>

          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="(item, index) in filteredItems" :key="index" value="item.ID">
            <td class="px-7 py-4">
              <div class="font-normal text-gray-500">{{ item.name }}</div>
            </td>
            <td class="px-7 py-4">
              <div class="font-normal text-gray-500" v-for="(storage, index) in item.storage" :key="index">
                {{ storage.name }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </template>
  
  <script>
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
export default {
  data() {
    return {
      searchItem: "",
      items: [],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>{
        return item.name.toLowerCase().includes(this.searchItem.toLowerCase())
      })
  }

} ,
  methods: {
    async getWarehouse() {
      const warehouse = await axios.get('http://13.213.12.136:3000/warehouse/all')
      console.log(warehouse.data.data.Items[0].storage)
      this.items = warehouse.data.data.Items
    }
  },
  async mounted() {
    await this.getWarehouse()
  }
  }
</script>
  
  <style lang="">
</style>

  

  