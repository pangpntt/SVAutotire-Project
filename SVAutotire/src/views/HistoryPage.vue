<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5 mb-5">ประวัติการนำเข้า-ขาย</p>
        <div class="flex items-center justify-start md:space-y-0 pb-4 bg-white">
            <div>
                <button class="items-center px-4 py-2 border-solid border-2 border-gray-500 rounded-md bg-gray text-black text-sm mr-5" @click="showImport = true">นำเข้า</button>
                <button class="items-center px-4 py-2 border-solid border-2 border-gray-500 rounded-md bg-gray text-black text-sm mr-5" @click="showImport = false">ขาย</button>
            </div>
        </div>
        <TableImport v-if="showImport"/>
        <TableSell v-if="!showImport"/>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TableImport from '@/components/TableImport.vue';
import TableSell from '@/components/TableSell.vue';
export default {
    components: {
        Sidebar, TableImport, TableSell
    },
    data() {
        return {
            showImport: true
        }
    }
}
</script>

<style>
/* ตั้งค่าสไตล์ตามต้องการ */
</style>
