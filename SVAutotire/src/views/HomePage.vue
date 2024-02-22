<script setup>
import Sidebar from '@/components/Sidebar.vue';
import Table from '@/components/TableProduct.vue'
import Modal from '@/components/Modal.vue';

</script>

<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">สินค้าทั้งหมด</p>
        <div >
            <Table />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    components: {
        Modal, Table
    },
    data() {
    return {
      isModalOpen: false,
      product: [],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
}
</script>
<style lang="">
    
</style>