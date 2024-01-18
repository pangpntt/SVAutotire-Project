<template lang="">
<div class="relative overflow-x-auto sm:rounded-lg">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
        <div>
        <button @click="toggleDropdown" id="dropdownHoverButton" class="text-gray-900 border border-gray-300  w-50 bg-gray-50  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button">
            โกดัง 
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div v-show="isDropdownOpen" id="dropdownHover" class="z-10 bg-gray-50 divide-y divide-gray-100 text-black rounded-lg shadow w-44">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">SV</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">โชว์</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">TN</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 text-black">ด่านนอก</a>
                </li>
            </ul>
        </div>
    </div>        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="ค้นหาชื่อสินค้า">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    สินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                    ชนิดสินค้า
                </th>
                <th scope="col" class="px-6 py-3">
                    จำนวน
                </th>
                <th scope="col" class="px-6 py-3">
                    ราคาขาย
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b ">
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Neil Sims</div>
                        <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    React Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>

        </tbody>
    </table>
</div>

</template>
<script>
export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    methods: {
        toggleDropdown() {
            
            this.isDropdownOpen = !this.isDropdownOpen;
        }
    }
    
}
</script>
<style lang="">
    
</style>