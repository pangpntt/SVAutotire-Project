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