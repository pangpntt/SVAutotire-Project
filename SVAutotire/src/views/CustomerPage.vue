
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">ข้อมูลลูกค้า</p>
        <router-link to="/customer/add" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มข้อมูลลูกค้า</span>
        </router-link>
        <div >
            <TableCustomer/>
        </div>
    </div>

</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import TableCustomer from '@/components/TableCustomer.vue';
export default {
    components: {
        Sidebar, TableCustomer
    }
    
}
</script>
<style lang="">
    
</style>