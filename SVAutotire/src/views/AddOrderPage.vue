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
                        <v-text-field type="date" v-model="date" label="วันที่"></v-text-field>
                    </v-col>
                    <v-col v-for="(textField, index) in textFields" :key="index" col="12" md="12">
                        <v-text-field label="รหัสสินค้า" v-model="textFields[index].proID"></v-text-field>
                        <v-text-field label="ราคา" v-model="textFields[index].price"></v-text-field>
                        <v-text-field label="จำนวน" v-model="textFields[index].amount"></v-text-field>
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
                            :items="oldCustomer.map(item => item.fname)"
                            v-model="customerName"
                        ></v-select>
                        <v-textarea label="หมายเหตุ" v-model="note"></v-textarea>
                    </v-col>
                    <v-col col="12" md="12" v-if="selectedOption === 'newCus'">
                        <v-text-field label="ชื่อ" v-model="newCustomerName"></v-text-field>
                        <v-text-field label="นามสกุล" v-model="newCustomerSurname"></v-text-field>
                        <v-text-field label="จำนวนไมล์" v-model="miles"></v-text-field>
                        <v-text-field label="ป้ายทะเบียน" v-model="licensePlate"></v-text-field>
                        <v-textarea label="หมายเหตุ" v-model="note"></v-textarea>
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
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue';
import { data } from 'autoprefixer';

export default {
    components: {
        Sidebar
    },
    data() {
    return {
      date: '',
      selectedOption: null,
      textFields: [{ proID: '', price: '', amount: '' }],
      customerName: '',
      newCustomerName: '',
      newCustomerSurname: '',
      miles: '',
      licensePlate: '',
      note: '',
      oldCustomer: [],
      empName: 'Captain'
    };
  },
  methods: {
    addTextField() {
        this.textFields.push({ proID: '', price: '', amount: '' });
    },
    async submit() {
        console.log(this.textFields[0])
        console.log(this.date)
        if(this.selectedOption === "newCus"){
            axios.post('http://13.213.12.136:3000/customer',{
            fname: this.newCustomerName,
            lname: this.newCustomerSurname,
            mile: this.miles,
            licensePlate: this.licensePlate,
        })
        }
        await axios.post('http://13.213.12.136:3000/saleOrder', {
            orderDate: this.date,
            product: this.textFields,
            // customerType: this.selectedOption,
            cusName: this.selectedOption === 'oldCus' ? this.customerName : this.newCustomerName,
            empName: this.empName,
            // customerSurname: this.newCustomerSurname,
            // miles: this.miles,
            // licensePlate: this.licensePlate,
            note: this.note
        })
        .then((res) => {
            console.log(res.status)
        })
        .catch((error) => {
            console.log(error.status)
        })
    },
    async getOldCus() {
        try {
            const response = await axios.get('http://13.213.12.136:3000/customer/all');
            this.oldCustomer = response.data.data;
            this.$swal('เพิ่มคำสั่งซื้อเสร็จสิ้น');
            this.$router.push({ path: '/order' });
        } catch (error) {
            console.error('Error fetching old customers:', error);
        }
    }
  },
  async mounted() {
    await this.getOldCus();
  }
}
</script>

<style>

</style>
