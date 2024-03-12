<template lang="">
<section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
        SVAutotire Sale & Service    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form class="space-y-4 md:space-y-6" v-on:submit.prevent="submit">
                  <div>
                      <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input v-model="username"  name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="username">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                  </div>

                  <button type="submit" class="w-full text-white border bg-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

              </form>
          </div>
      </div>
  </div>
</section>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submit() {
            axios.post('http://localhost:3000/',{
            // axios.post('http://13.213.12.136:3000/', {
                username: this.username,
                password: this.password
            })
            .then((res) => {
                if(res.status == 'error'){

                }else{
                    localStorage.setItem('token', res.data.data);
                    this.$router.push({ path: '/product' });
                }

            })
        }
    }
}
</script>
<style lang="">
    
</style>