<template>
  <div>
    <swiper></swiper>
    <foundnav></foundnav>
    <hr>
    <foundlist></foundlist>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import swiper from './swiper.vue'
import foundnav from './found_nav.vue'
import foundlist from './found_list.vue'
export default {
 name: 'found_page',
 components: {
  swiper,
  foundnav,
  foundlist
 }
};
</script>

<style>
  
</style>