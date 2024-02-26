
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">ข้อมูลพนักงาน</p>
        <router-link to="/employee/add" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มข้อมูลพนักงาน</span>
        </router-link>
        <div class="mt-5">
            <TableEmployee />
        </div>
    </div>

</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import TableEmployee from '@/components/TableEmployee.vue';
import axios from 'axios';
export default {
    components: {
        Sidebar, TableEmployee
    }
}
</script>
<style lang="">
    
</style>