
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">คลังสินค้า</p>
        <router-link to="/warehouse/manage" class="items-center p-3 mb-5 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>จัดการคลังสินค้า</span>
        </router-link>
        <div>
            <div class="grid grid-cols-2 gap-4  mt-5 mb-5">
            <div class="border bg-emerald-800 rounded-md text-center" v-for="(item, index) in items" :key="index" value="item.ID">
                <div class="">
                    <p class="text-white text-xl pb-3 pt-3">{{item.name}}</p>
                    <p class="text-white text-5xl pb-3">{{item.amount}}</p>
                    <p class="text-white text-base pb-3">ชิ้น</p>
                </div>
            </div>
        </div>
            <div>
                <TableProductWarehouse/>
            </div>
        </div>
    </div>

</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import TableProductWarehouse from '@/components/TableProductWarehouse.vue';
import axios from 'axios';
export default {
    components: {
        Sidebar, TableProductWarehouse
    },
    data() {
        return {
            items: []
        };
    },
    methods: {
        async getWarehouse() {
            const warehouse = await axios.get('http://13.213.12.136:3000/warehouse/all')
            console.log(warehouse.data.data.Items[0])
            this.items = warehouse.data.data.Items
        }
    },
    async mounted() {
      await this.getWarehouse()
    }
 
}
</script>
<style lang="">
    
</style>