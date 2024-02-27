<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5 mb-5">สินค้าทั้งหมด</p>
        <router-link to="/employee/add" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>เพิ่มสินค้า</span>
        </router-link>
        <div class="mt-5">
            <TableProduct />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import TableProduct from '@/components/TableProduct.vue';
import DialogProduct from '@/components/DialogProduct.vue';

export default {
    components: {
        Sidebar,DialogProduct,TableProduct
    }
}
</script>
<style >
    
</style>