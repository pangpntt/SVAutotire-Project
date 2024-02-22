<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Table from '@/components/TableCustomer.vue'
import Modal from '@/components/Modal.vue';
</script>
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">ข้อมูลพนักงาน</p>
        <div>
            <button @click="openModal" class="bg-emerald-500 text-white px-4 py-2 rounded-md">เพิ่มข้อมูลลูกค้า</button>
            <Modal :isOpen="isModalOpen" title="เพิ่มสินค้า" @close="closeModal"></Modal>
        </div>
        <div >
            <Table v-if="!isModalOpen"/>
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>