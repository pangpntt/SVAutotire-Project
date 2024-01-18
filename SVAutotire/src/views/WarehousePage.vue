<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Table from '@/components/TableWarehouse.vue'
</script>
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">คลังสินค้า</p>
        <div >
            <div>
            <form class="max-w-sm flex items-center">
                <div class="mb-5">
                    <label class="block mb-2 text-sm font-medium text-gray-900">ชื่อโกดัง</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5" placeholder="" required>
                </div>
                <button type="submit" class="text-white bg-emerald-500 hover:bg-emerald-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-2 ml-5 text-center">เพิ่มโกดัง</button>
            </form>
            </div>
            <Table/>
        </div>
    </div>

</template>
<script>
export default {
    components: {
        Table
    }
    
}
</script>
<style lang="">
    
</style>