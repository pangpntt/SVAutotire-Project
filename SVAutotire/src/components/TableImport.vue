<template lang="">
    <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-left rtl:text-right text-gray-500 mt-10">
            <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
                <tr>
                    <th scope="col" class="px-6 py-3 font-bold">ชนิดสินค้า</th>
                    <th scope="col" class="px-6 py-3 font-bold">รหัสสินค้า</th>
                    <th scope="col" class="px-6 py-3 font-bold">บริษัท</th>
                    <th scope="col" class="px-6 py-3 font-bold">จำนวน</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.type }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.company }}</td>
                    <td>{{ item.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    items: [
        {
            type: 'ล้อ',
            id: "A123",
            company: 'kmitl',
            amount: '100'
        }
    ]
}
</script>

<style></style>