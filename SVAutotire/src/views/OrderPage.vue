<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5 mb-5">คำสั่งซื้อทั้งหมด</p>
        <router-link to="/order/add" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มคำสั่งซื้อ</span>
        </router-link>
        <div>
            <TableOrder/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TableOrder from '@/components/TableOrder.vue';
export default {
    components: {
        Sidebar, TableOrder
    }
}
</script>

<style>

</style>