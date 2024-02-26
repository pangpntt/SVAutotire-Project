
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มข้อมูลพนักงาน</p>
        <div class="mt-5">
            <form v-on:submit.prevent="submit">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="form.fname"
                        label="ชื่อ"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="form.lname"
                        label="นามสกุล"

                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="form.tel"
                        label="เบอร์โทรศัพท์"

                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.username"
                        label="username"

                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.password"
                        label="password"
                    ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-label>ตำแหน่ง</v-label>
                        <v-radio-group v-model="form.role">
                            <v-radio label="ผู้จัดการ" value="manager"></v-radio>
                            <v-radio label="พนักงาน" value="employee"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                </v-container>
                <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                    เพิ่มพนักงาน
                </button>

            </form>        
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import Sidebar from "@/components/Sidebar.vue";
import TableEmployee from "@/components/TableEmployee.vue";
export default {
  components: {
    Sidebar,
    TableEmployee,
  },
  name: 'PostAxios',
  data() {
    return{
        form: {
            fname: '',
            lname: '',
            tel: '',
            username: '',
            password: '',
            role: []
        }
    }
  },
  methods: {
    submit() {
        // axios.post('http://localhost:3000/employee')
        console.log(this.form.role)
        axios.post('http://localhost:3000/employee',{
            fname: this.form.fname,
            lname: this.form.lname,
            tel: this.form.tel,
            username: this.form.username,
            password: this.form.password,
            role: this.form.role
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