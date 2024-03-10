<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มสินค้า</p>
        <form v-on:submit.prevent="submit">
            <v-container>
                <v-row>
                    <v-col col="12" md="4">
                        <v-text-field label="รหัสสินค้า" v-model="proID"></v-text-field>
                    </v-col>
                    <v-col col="12" md="4">
                        <v-text-field label="ชื่อสินค้า" v-model="name"></v-text-field>
                    </v-col>
                    <v-col col="12" md="4">
                        <v-select label="ชนิดสินค้า" :items="['wheel', 'tire']" v-model="type"></v-select>
                    </v-col>
                    <v-col col="12" md="4">
                        <v-text-field label="ราคา" v-model="price"></v-text-field>
                    </v-col>
                    <v-col col="12" md="4">
                        <v-text-field label="จำนวน" v-model="amount"></v-text-field>
                    </v-col>
                    <v-col col="12" md="4">
                        <v-file-input label="อัพโหลดภาพสินค้า" accept="image/*" v-model="image"></v-file-input>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-select label="คลังสินค้า" :items="items.map(item => item.name)" return-object v-model="selectedWarehouse"></v-select>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-select label="ที่เก็บ" :items="getStorage()" return-object v-model="selectedStorage"></v-select>
                    </v-col>
                    <v-col>
                        <v-textarea label="รายละเอียดเพิ่มเติม" v-model="descript"></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
            <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                    เพิ่มสินค้า
            </button>
        </form>
    </div>
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
            items: [],
            proID: '',
            name: '',
            price: '',
            amount: '',
            image: '',
            descript: '',
            type: '',
            storage: '',
            selectedWarehouse: null,
            selectedStorage: null,
        }
    },
    computed: {
    filteredStorage() {
        if (!this.selectedWarehouse) 
        return [];
        const warehouse = this.items.find(item => item.name === this.selectedWarehouse);
        console.log(warehouse)
        return warehouse ? warehouse.storage : [];
    }
    },
    methods: {
        async getWarehouse() {
            const warehouse = await axios.get('http://localhost:3000/warehouse/all')
            // console.log(warehouse)
            this.items = warehouse.data.data.Items
        },
        getStorage() {
        return this.filteredStorage.map(storage => storage.name);
        },
        async submit() {
            await axios.post('http://localhost:3000/product/', {
                proID: this.proID,
                name: this.name,
                price: this.price,
                amount: this.amount,
                warehouse: this.selectedWarehouse,
                storage: this.selectedStorage,
                descript: this.descript,
                type: this.type
            })
            .then((res) => {
                console.log(res.status)
            })
            .catch((error) => {
                console.log(error.status)
            })
        }
    },
    async mounted() {
        await this.getWarehouse();
    }
}
</script>

<style>

</style>