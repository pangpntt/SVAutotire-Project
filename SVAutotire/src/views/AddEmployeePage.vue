
<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มข้อมูลพนักงาน</p>
        <div class="mt-5">
            <v-form v-model="valid">
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="ชื่อ"
                        required
                        hide-details
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="นามสกุล"
                        hide-details
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="เบอร์โทรศัพท์"
                        hide-details
                        required
                    ></v-text-field>
                    </v-col>


                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="username"
                        hide-details
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="password"
                        hide-details
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-label>ตำแหน่ง</v-label>
                        <v-radio-group>
                            <v-radio label="ผู้จัดการ" value="one"></v-radio>
                            <v-radio label="พนักงาน" value="two"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
                </v-container>
            </v-form> 
            <v-btn class="bg-emerald-500 text-white">
                เพิ่ม
            </v-btn>
       
        </div>
    </div>

</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import TableEmployee from "@/components/TableEmployee.vue";
export default {
  components: {
    Sidebar,
    TableEmployee,
  },
};
</script>
<style lang="">
</style>