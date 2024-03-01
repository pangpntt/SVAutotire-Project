<template>
    <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-left rtl:text-right text-gray-500 mt-10">
            <thead class="text-base text-gray-700 uppercase bg-gray-100 ">
                <tr>
                    <th scope="col" class="px-6 py-3 font-bold">หมายเลขคำสั่งซื้อ</th>
                    <th scope="col" class="px-6 py-3 font-bold">ลูกค้า</th>
                    <th scope="col" class="px-6 py-3 font-bold">สินค้า</th>
                    <th scope="col" class="px-6 py-3 font-bold">จำนวน</th>
                    <th scope="col" class="px-6 py-3 font-bold">พนักงานขาย</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.cus }}</td>
                    <td>{{ item.product }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.emp }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    items: [
        {
            id: 'ล้อ',
            cus: "A123",
            product: 'kmitl',
            amount: '100',
            emp: 'pang'
        }
    ]
}
</script>

<style>

</style>