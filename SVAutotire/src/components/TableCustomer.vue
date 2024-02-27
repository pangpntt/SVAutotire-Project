<template lang="html">
    <div class="">
      <div class="flex items-center justify-end pb-4 bg-white">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 mx-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchItem" type="text" id="table-search-users" class="block p-2 ps-10 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="ค้นหาชื่อลูกค้า">
        </div>
      </div>
      <table class="w-full text-left rtl:text-right text-gray-500 ">
        <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" class="px-6 py-3 font-bold">ชื่อ</th>
            <th scope="col" class="px-6 py-3 font-bold">นามสกุล</th>
            <th scope="col" class="px-6 py-3 font-bold">ไมล์รถ</th>
            <th scope="col" class="px-6 py-3 font-bold">ป้ายทะเบียน</th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="(item, index) in filteredItems" :key="index">
            <td v-for="(value, key) in item" :key="key" class="px-7 py-4">
              <div v-if="editMode && index === editItemIndex">
                <input v-model="editedItem[key]" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
              </div>
              <div v-else class="font-normal text-gray-500">{{ value }}</div>
            </td>
            <td class="px-7 py-4">
              <a v-if="!editMode" @click="editItem(index)" href="#" class="font-medium text-blue-600 hover:underline">แก้ไข</a>
              <a v-else @click="saveItem(index)" href="#" class="font-medium text-green-600 hover:underline">บันทึก</a>
            </td>
            <td class="px-7 py-4">
              <a v-if="!editMode" @click="deleteItem(index)" href="#" class="font-medium text-red-600 hover:underline">ลบ</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchItem: '',
        editMode: false,
        editItemIndex: null,
        editedItem: {},
        items: [
          { fname: 'พัณณิตา', name: 'สายศร', type: '20000', amount: '1กศ 7746' },
          { fname: 'อาชัญ', name: 'พลานุพัฒน์', type: '35000', amount: 'ธม 2345' },
        ],
      };
    },
    computed: {
      filteredItems() {
        return this.currentWarehouse && this.currentWarehouse !== 'All'
          ? this.items.filter(item => item.fname === this.currentWarehouse && item.fname.toLowerCase().includes(this.searchItem.toLowerCase()))
          : this.items.filter(item => item.fname.toLowerCase().includes(this.searchItem.toLowerCase()));
      },
    },
    methods: {
      editItem(index) {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedItem = { ...this.items[index] };
      },
      saveItem(index) {
        this.items[index] = { ...this.editedItem };
        this.editMode = false;
        this.editItemIndex = null;
        this.editedItem = {};
      },
      deleteItem(index) {
        this.items.splice(index, 1);
      },
    }, 
  }
  </script>
  
  <style lang="">
      
  </style>
  