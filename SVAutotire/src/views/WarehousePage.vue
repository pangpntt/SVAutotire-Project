
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">คลังสินค้า</p>
        <router-link to="/warehouse/manage" class="items-center p-3 mb-5 border-solid rounded-md bg-emerald-500 text-white text-sm">
            <span>จัดการคลังสินค้า</span>
        </router-link>
        <div class="grid grid-cols-2 gap-4 place-content-stretch h-48 mt-5 mb-5">
            <div class="border-2 border-cyan-900 rounded-md text-center">
                <div class="justify-center">
                    <p class="text-base">สินค้าทั้งหมด</p>
                    <p>{{}}</p>
                    <p>ชิ้น</p>
                </div>
            </div>
            <div class="border-2 border-cyan-900 rounded-md text-center" v-for="(item, index) in items" :key="index" value="item.ID">
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.amount}}</p>
                    <p>ชิ้น</p>
                </div>
            </div>
        </div>    </div>

</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
export default {
    components: {
        Sidebar
    },
    data() {
        return {
            items: []
        };
    },
    methods: {
        async getWarehouse() {
            const warehouse = await axios.get('http://localhost:3000/warehouse/all')
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