<template>
    <v-row>
      <v-dialog v-model="dialog" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props">เพิ่มสินค้า</v-btn>
        </template>
        <v-card>
          <v-card-title class="text-center mt-5">
            <span>เพิ่มสินค้า</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="ชื่อสินค้า*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-select
                        :items="['ล้อ', 'ยาง']"
                        label="ประเภทสินค้า*"
                        required>
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-select
                    :items="['SV', 'TN']"
                    label="คลังสินค้า*"
                    required>
                    </v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="ราคา"
                        persistent-hint
                        required>
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="จำนวน"
                        persistent-hint
                        required>
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-file-input
                        :rules="rules"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an avatar"
                        prepend-icon="mdi-camera"
                        label="รูปภาพสินค้า">
                    </v-file-input>
                </v-col>
                <v-col cols="12">
                    <v-textarea
                        name="input-7-1"
                        variant="filled"
                        label="คำอธิบายเพิ่มเติม"
                        auto-grow
                        model-value="">
                    </v-textarea>
                </v-col>
                <!-- <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col> -->
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