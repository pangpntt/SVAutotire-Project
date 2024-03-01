<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">จัดการคลังสินค้า</p>
        <router-link to="/warehouse/manage/add" class="items-center p-3 mb-5 mr-5 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มคลังสินค้า</span>
        </router-link>
        <router-link to="/warehouse/manage/add" class="items-center p-3 mb-5 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มที่เก็บ</span>
        </router-link>
        <table class="w-9/12  text-left rtl:text-right text-gray-500 mt-5">
            <thead class="text-base text-gray-700 uppercase bg-gray-100">
                <tr>
                    <th scope="col" class="px-6 py-3 font-bold">คลังสินค้า</th>
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
import Sidebar from '@/components/Sidebar.vue';
export default {
    components: {
        Sidebar
    },
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
        },
        {
          warehouse: "TN",
        },
        {
          warehouse: "โชว์",
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
            item.warehouse.toLowerCase().includes(this.searchItem.toLowerCase())
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

}
</script>

<style>

</style>