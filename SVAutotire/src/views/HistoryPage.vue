<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5 mb-5">ประวัติการขาย</p>
        <TableSell/>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TableImport from '@/components/TableImport.vue';
import TableSell from '@/components/TableSell.vue';
export default {
    components: {
        Sidebar, TableSell
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
