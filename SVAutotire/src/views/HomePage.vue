<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Table from '@/components/Table.vue'
</script>

<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">สินค้าในสต็อกทั้งหมด</p>
        <div >
            <Table/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>