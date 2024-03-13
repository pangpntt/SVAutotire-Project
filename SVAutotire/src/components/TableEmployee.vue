<template lang="html">
    <div class="relative overflow-x-auto sm:rounded-lg">
      <div class="flex items-center justify-end pb-4 bg-white">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 mx-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchItem" type="text" id="table-search-users" class="block p-2 ps-10 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="ค้นหาชื่อพนักงาน">
        </div>
      </div>
      <table class="w-full text-left rtl:text-right text-gray-500 ">
        <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" class="px-6 py-3 font-bold">ชื่อ</th>
            <th scope="col" class="px-6 py-3 font-bold">นามสกุล</th>
            <th scope="col" class="px-6 py-3 font-bold">เบอร์โทรศัพท์</th>
            <th scope="col" class="px-6 py-3 font-bold">ตำแหน่ง</th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="(item, index) in filteredItems" :key="index" value="item.ID">
            <td class="px-7 py-4">
              {{ item.fname }}
              <div v-if="editMode && index === editItemIndex">
                <input v-model="editedItem.fname" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
              </div>
              <div v-else class="font-normal text-gray-500">{{ value }}</div>
            </td>

            <td class="px-7 py-4">
              {{ item.lname }}
              <div v-if="editMode && index === editItemIndex">
                <input v-model="editedItem.lname" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
              </div>
              <div v-else class="font-normal text-gray-500">{{ value }}</div>
            </td>

            <td class="px-7 py-4">
              {{ item.tel }}
              <div v-if="editMode && index === editItemIndex">
                <input v-model="editedItem.tel" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
              </div>
              <div v-else class="font-normal text-gray-500">{{ value }}</div>
            </td>

            <td class="px-7 py-4">
              {{ item.role }}
              <div v-if="editMode && index === editItemIndex">
                <input v-model="editedItem.role" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
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
  import axios from 'axios'
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  export default {
    data() {
      return {
        searchItem: '',
        editMode: false,
        editItemIndex: null,
        editedItem: {},
        items: [],
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
      
      async saveItem(index) {
        this.items[index] = { ...this.editedItem };
        try {
          const res = await axios.put(`http://13.213.12.136:3000/employee/edit/${this.items[index].ID}`, this.editedItem);
          console.log(res.status);
        } 
        catch (error) {
          console.error(error);
        }
        this.editMode = false;
        this.editItemIndex = null;
        this.editedItem = {};      
      },

      async deleteItem(index) {
        const result = window.confirm("Are you sure?");
        console.log(this.items[index].ID)
        await axios.delete(`http://13.213.12.136:3000/employee/delete/${this.items[index].ID}`)
        alert("ข้อมูลพนักงานถูกลบ");
        this.items.splice(index, 1);
      },

      async getEmployee() {
        const empData = await axios.get('http://13.213.12.136:3000/employee/all',

        )
        // const empData = await axios.get('http://13.213.12.136:3000/employee/all')
        console.log(empData)
        this.items = empData.data.data
        console.log(this.items)
      }
    }, 
    async mounted() {
      await this.getEmployee()
    }
  }
  </script>
  
  <style lang="">
      
  </style>
  