<template lang="">
    <div class="relative overflow-x-auto sm:rounded-lg">
    <div class="flex items-center justify-end md:space-y-0 pb-4 mt-5 bg-white">
      <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 mx-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input v-model="searchItemName" type="text" id="table-search-users" class="block p-2 ps-10 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="ค้นหาชื่อลูกค้า">
      </div>
    </div>
    <table class="w-full text-left rtl:text-right text-gray-500 mt-10">
      <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
        <tr>
          <th scope="col" class="px-6 py-3 font-bold">รหัสสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">ชนิดสินค้า</th>
          <th scope="col" class="px-6 py-3 font-bold">จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b" v-for="(item, index) in items" :key="index" >
          <td class="px-7 py-4">
            <div class="font-normal">{{item.proID}}</div>
          </td>
          <td class="px-7 py-4">
            <div class="font-normal">{{ item.orderDate }}</div>
          </td>
          <td class="px-7 py-4">
            <div class="font-normal" v-for="(pro, index) in item.product" :key="index">{{pro.proID}}</div>
          </td>
          <td class="px-7 py-4">
            <div class="font-normal" v-for="(pro, index) in item.product" :key="index">{{ pro.amount }}</div>
          </td>
          <td class="px-7 py-4">
            <div class="font-normal">{{ item.note }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import axios from 'axios'
export default {
data() {
  return {
    searchItemName: '',
    items: [],
  };
},
computed: {
  // filteredItems() {
  //   return this.items.filter(item => {
  //     return item.customerName.toLowerCase().includes(this.searchItemName.toLowerCase())
  //   })
  // }
},
methods: {
    async getProduct() {
      const productData = await axios.get('http://13.213.12.136:3000/')
      // console.log(productData.data.data.Items[0])
      this.items = productData.data.data.Items
    }
},
async getProduct() {
  await this.getProduct();
}
}
</script>

<style></style>