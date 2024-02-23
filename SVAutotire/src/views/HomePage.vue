<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5 mb-5">สินค้าทั้งหมด</p>
        <DialogProduct />
        <div class="mt-5">
            <DataTableProduct />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import DataTableProduct from '@/components/DataTableProduct.vue'
import DialogProduct from '@/components/DialogProduct.vue';

export default {
    components: {
        DataTableProduct,Sidebar,DialogProduct
    }
}
</script>
<style >
    
</style>