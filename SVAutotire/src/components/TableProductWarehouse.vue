

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
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 mx-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchItemName" type="text" id="table-search-users" class="block p-2 ps-10 mx-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50" placeholder="ค้นหารหัสสินค้า">
        </div>

      </div>

      <table class="w-full text-left rtl:text-right text-gray-500 ">
        <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
          <tr>
            <th scope="col" class="px-6 py-3 font-bold">คลังสินค้า</th>
            <th scope="col" class="px-6 py-3 font-bold">รหัสสินค้า</th>
            <th scope="col" class="px-6 py-3 font-bold">จำนวน</th>
            <th scope="col" class="px-6 py-3 font-bold">ที่เก็บ</th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
            <th scope="col" class="px-6 py-3 font-bold"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b" v-for="(item, index) in filteredItems" :key="index">
            <td v-for="(value, key) in item" :key="key" class="px-7 py-4">
              <div class="font-normal text-gray-500">{{ value }}</div>
            </td>
          </tr>
        </tbody>
      </table>
  </template>
  
  <script>
export default {
  data() {
    return {
      currentWarehouse: null,
      searchItem: "",
      searchItemName: '',
      editMode: false,
      editItemIndex: null,
      editedItem: {},
      items: [
        {
          warehouse: "SV",
          id: 'A123',
          amount: "100",
          stock: "2000",
        },
        {
          warehouse: "TN",
          id: 'A123',
          amount: "200",
          stock: "2000",
        },
        {
          warehouse: "SV",
          id: 'A123',
          amount: "100",
          stock: "2000",
        },
        {
          warehouse: "SV",
          id: 'A123',
          amount: "100",
          stock: "2000",
        },
        {
          warehouse: "TN",
          id: 'A123',

          amount: "200",
          stock: "2000",
        },
        {
          warehouse: "SV",
          id: 'A123',
          amount: "100",
          stock: "2000",
        },
        {
          warehouse: "TN",
          id: 'A123',

          amount: "200",
          stock: "2000",
        },
        {
          warehouse: "TN",
          id: 'A123',

          amount: "200",
          stock: "2000",
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.currentWarehouse && this.currentWarehouse !== "All"
        ? this.items.filter(
            (item) =>
              item.warehouse === this.currentWarehouse &&
              item.warehouse.toLowerCase().includes(this.searchItem.toLowerCase())
          )
        : this.items.filter((item) =>
            item.warehouse.toLowerCase().includes(this.searchItem.toLowerCase()) && item.id.toLowerCase().includes(this.searchItemName.toLowerCase())
          );
    },
  },
  methods: {
    filterByWarehouse(warehouse) {
      this.currentWarehouse = warehouse;
    },
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
};
</script>
  
  <style lang="">
</style>

  

  