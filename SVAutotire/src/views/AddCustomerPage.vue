
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มข้อมูลลูกค้า</p>
        <div class="mt-5">
            <form v-on:submit.prevent="submit">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.fname"
                        label="ชื่อ"
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.lname"
                        label="นามสกุล"

                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.mile"
                        label="ไมล์รถ"

                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.licensePlate"
                        label="ป้ายทะเบียน"
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
                <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                    เพิ่มลูกค้า
                </button>

            </form>        
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  name: 'PostAxios',
  data() {
    return{
        form: {
            fname: '',
            lname: '',
            mile: '',
            licensePlate: '',
        }
    }
  },
  methods: {
    submit() {
        axios.post('http://13.213.12.136:3000/customer',{
            fname: this.form.fname,
            lname: this.form.lname,
            mile: this.form.mile,
            licensePlate: this.form.licensePlate,
        })
        .then((res) => {
            console.log(res.status)
        })
        .catch((error) => {
            console.log(error.status)
        })
        .finally(() => {
            this.fname = ''
        })
    }
  }
};
</script>
<style lang="">
</style>