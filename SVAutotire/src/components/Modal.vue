<template lang="">
    <div v-show="isOpen" class="fixed inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span> 
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg  leading-6 font-medium text-gray-900">
                {{ title }}
              </h3>
                <div class="mt-5 grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">ชื่อสินค้า</label>
                    <div class="mt-2">
                        <input type="text" name="product-name" id="product-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">จำนวน</label>
                    <div class="mt-2">
                        <input type="number" name="product-amount" id="product-amount" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">ราคา</label>
                    <div class="mt-2">
                        <input type="number" name="product-price" id="product-price" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">ชนิด</label>
                    <div class="mt-2">
                        <select id="product-type" name="product-type" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>ล้อ</option>
                        <option>ยาง</option>
                        </select>                    
                    </div>
                    </div>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-x-20 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">โกดัง</label>
                    <div class="mt-2">
                        <select id="product-warehouse" name="product-warehouse" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>SV</option>
                        <option>TN</option>
                        </select>                    
                    </div>
                    </div>

                    <div class="sm:col-span-3">
                    <label class="block text-sm font-medium leading-6 text-gray-900">ที่เก็บ</label>
                    <div class="mt-2">
                        <input type="text" name="product-storage" id="product-storage" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="closeModal" type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-500 text-base font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm">
            เพิ่มสินค้า
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
    isOpen: Boolean,
    title: String,
    message: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};

</script>
<style lang="">
    
</style>