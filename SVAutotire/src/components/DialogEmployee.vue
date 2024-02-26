<template>
    <v-row>
      <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">เพิ่มพนักงาน</v-btn>
        </template>
        <v-card>
          <v-card-title class="text-center mt-5">
            <span>เพิ่มพนักงาน</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="ชื่อ*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field label="นามสกุล*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field label="Username*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field label="Password*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field label="เบอร์โทรศัพท์" required></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                    <v-radio-group>
                        <v-radio label="Manager" value="ผู้จัดการ"></v-radio>
                        <v-radio label="Employee" value="พนักงาน"></v-radio>
                    </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
            <small>*ช่องที่ต้องกรอก</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style>
</style>