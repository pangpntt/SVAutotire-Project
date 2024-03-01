<template lang="">
  <header>
    <Sidebar/>
  </header>
  <div class="p-4 sm:ml-64">
        <p class="text-2xl text-black font-semibold pb-5 pt-5">เพิ่มคลังสินค้า</p>
        <form action="">
            <v-container>
                <v-row>
                    <v-col col="12" md="12">
                        <v-text-field label="ชื่อคลังสินค้า"></v-text-field>
                    </v-col>
                    <v-col>
                        <input type="radio" id="option1" value="option1" v-model="selectedOption">
                        <label for="option1" class="mr-5 ml-2">เพิ่มที่เก็บ</label>
                        <input type="radio" id="option2" value="option2" v-model="selectedOption">
                        <label for="option2" class="ml-2">ไม่เพิ่ม</label>                    </v-col>
                    <v-col col="12" md="12" v-if="selectedOption === 'option1'">
                        <v-text-field label="ที่เก็บ" v-model="textFieldValue1"></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
            <button type="submit" class="items-center p-3 border-solid rounded-md bg-emerald-500 text-white text-sm">
                เพิ่มคลังสินค้า
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
      textFieldValue1: '',
      textFieldValue2: ''
    };
  }
}
</script>

<style>

</style>