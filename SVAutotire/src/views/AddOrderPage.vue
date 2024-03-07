<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มคำสั่งซื้อ</p>
        <form v-on:submit.prevent="submit">
            <v-container>
                <v-row>
                    <v-col col="12" md="12">
                        <v-text-field type="date" label="วันที่"></v-text-field>
                    </v-col>
                    <v-col v-for="(textField, index) in textFields" :key="index" col="12" md="12">
                        <v-text-field label="ที่เก็บ" v-model="textFields[index].storage"></v-text-field>
                        <v-text-field label="ราคา" v-model="textFields[index].price"></v-text-field>
                        <v-text-field label="จำนวน" v-model="textFields[index].quantity"></v-text-field>
                    </v-col>
                    <v-col col="12" md="12">
                        <v-btn density="compact" icon="mdi-plus" @click="addTextField"></v-btn>
                    </v-col>
                    <v-col col="12" md="6">
                        <input type="radio" id="oldCus" value="oldCus" v-model="selectedOption">
                        <label for="oldCus" class="mr-5 ml-2">ลูกค้าเก่า</label>
                        <input type="radio" id="newCus" value="newCus" v-model="selectedOption">
                        <label for="newCus" class="ml-2">ลูกค้าใหม่</label>
                    </v-col>
                    <v-col col="12" md="12" v-if="selectedOption === 'oldCus'">
                        <v-select
                        label="ชื่อลูกค้า"
                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                        ></v-select>
                        <v-textarea label="หมายเหตุ"></v-textarea>
                    </v-col>
                    <v-col col="12" md="12" v-if="selectedOption === 'newCus'">
                        <v-text-field label="ชื่อ"></v-text-field>
                        <v-text-field label="นามสกุล"></v-text-field>
                        <v-text-field label="จำนวนไมล์"></v-text-field>
                        <v-text-field label="ป้ายทะเบียน"></v-text-field>
                        <v-textarea label="หมายเหตุ"></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
            <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                เพิ่มคำสั่งซื้อ
            </button>
        </form>
    </div>

</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
    components: {
        Sidebar
    },
    data() {
    return {
      selectedOption: null,
      textFields: [{ storage: '', price: '', quantity: '' }],
    };
  },
  methods: {
    addTextField() {
        this.textFields.push({ storage: '', price: '', quantity: '' });
    }
  }
}
</script>

<style>

</style>