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
          <th scope="col" class="px-6 py-3 font-bold">คลังสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">รหัสสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">ชื่อสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">ชนิดสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">จำนวน</th>
          <th scope="col" class="px-6 py-3 font-bold">ราคา</th>
          <th scope="col" class="px-6 py-3 font-bold"></th>
          <th scope="col" class="px-6 py-3 font-bold"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b" v-for="(item, index) in items" :key="index" value="item.ID">
          <td v-for="(warehouse, index) in item.warehouse" :key="index" class="px-7 py-4">
            {{ warehouse.name }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.proID" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
            </div>
            <div v-else class="font-normal text-gray-500">{{ value }}</div>
          </td>
          <td class="px-7 py-4">
            {{ item.proID }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.proID" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
            </div>
            <div v-else class="font-normal text-gray-500">{{ value }}</div>
          </td>
          <td class="px-7 py-4">
            {{ item.name }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.name" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
            </div>
            <div v-else class="font-normal text-gray-500">{{ value }}</div>
          </td>
          <td class="px-7 py-4">
            {{ item.type }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.type" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
            </div>
            <div v-else class="font-normal text-gray-500">{{ value }}</div>
          </td>
          <td class="px-7 py-4">
            {{ item.amount }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.amount" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
            </div>
            <div v-else class="font-normal text-gray-500">{{ value }}</div>
          </td>
          <td class="px-7 py-4">
            {{ item.price }}
            <div v-if="editMode && index === editItemIndex">
              <input v-model="editedItem.price" class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-24" :placeholder="key">
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
import axios from 'axios';
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
  // computed: {
  //   filteredItems() {
  //     return this.currentWarehouse && this.currentWarehouse !== 'All'
  //       ? this.items.filter(item => item.fname === this.currentWarehouse && item.fname.toLowerCase().includes(this.searchItem.toLowerCase()))
  //       : this.items.filter(item => item.fname.toLowerCase().includes(this.searchItem.toLowerCase()));
  //   },
  // },
  methods: {
    editItem(index) {
      this.editMode = true;
      this.editItemIndex = index;
      this.editedItem = { ...this.items[index] };
    },
    async saveItem(index) {
      this.items[index] = { ...this.editedItem };
      try {
        await axios.put(`http://localhost:3000/product/edit/${this.items[index].ID}`, this.editedItem)
      }
      catch (error) {
        console.log(error)
      }
      this.editMode = false;
      this.editItemIndex = null;
      this.editedItem = {};
    },
    async deleteItem(index) {
      await axios.delete(`http://localhost:3000/product/delete/${this.items[index].proID}`)
      console.log(this.items)
      this.items.splice(index, 1);
    },
    async getProduct() {
      const productData = await axios.get('http://localhost:3000/product/all')
      // console.log(productData.data.data.Items[0])
      this.items = productData.data.data.Items
    }
  },
  async mounted() {
    await this.getProduct()
  }
}
</script>

<style lang="">
    
</style>
