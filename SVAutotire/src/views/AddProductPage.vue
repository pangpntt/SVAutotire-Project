<template lang="">
    <header>
        <Sidebar/>
    </header>
    <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มสินค้า</p>
        <form action="">
            <v-container>
                <v-row>
                    <v-col col="12" md="6">
                        <v-text-field label="ชื่อสินค้า"></v-text-field>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-select label="ชนิดสินค้า" :items="['ล้อ', 'ยาง']"></v-select>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-text-field label="ราคา"></v-text-field>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-text-field label="จำนวน"></v-text-field>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-file-input label="อัพโหลดภาพสินค้า" accept="image/*"></v-file-input>
                    </v-col>
                    <v-col col="12" md="6">
                        <v-select label="คลังสินค้า" :items="['SV', 'TN']"></v-select>
                    </v-col>
                    <v-col>
                        <v-textarea label="รายละเอียดเพิ่มเติม"></v-textarea>
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
export default {
    components: {
        Sidebar
    }
}
</script>

<style>

</style>