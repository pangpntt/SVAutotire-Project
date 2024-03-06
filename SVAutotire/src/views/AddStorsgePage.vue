<template lang="">
    <header>
    <Sidebar/>
  </header>
  <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มที่เก็บ</p>
        <form v-on:submit.prevent="submit">
            <v-container>
                <v-row>
                    <v-col col="12" md="12">
                        <v-select label="ชื่อคลังสินค้า" :items="items.map(item => item.name)"></v-select>
                    </v-col>
                    <v-col v-for="(textField, index) in textFields" :key="index" col="12" md="12">
                        <v-text-field label="ที่เก็บ" v-model="textFields[index]"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-btn density="compact" icon="mdi-plus" @click="addTextField"></v-btn>
                    </v-col>
                </v-row>
            </v-container>

            <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                เพิ่มที่เก็บ
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
      selectedOption: null,
      textFields: [''],
      items: [],
    };
  },
  methods: {
        async getWarehouse() {
            const warehouse = await axios.get('http://localhost:3000/warehouse/all')
            console.log(warehouse.data.data.Items[0])
            this.items = warehouse.data.data.Items
        },
        addTextField() {
            this.textFields.push('');
        },
    },
    async mounted() {
      await this.getWarehouse()
    }
}
</script>

<style>
</style>