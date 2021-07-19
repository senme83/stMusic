<template>
  <div class="fater" style="height: 300px">
    <v-touch v-on:swipeup='swipeup1'>
      <div style="height: 200px">son</div>
      <div style="height: 200px">son</div>
      <div style="height: 200px">son</div>
    </v-touch>
  </div>
</template>

<script>
  export default {
    name: "test",
    methods: {
      swipeup1:function(){
        console.log('up!');
      }
    },
    mounted() {
      // document.querySelector('.fater').addEventListener('onscroll',
      // function (e) {
      //   e = e || window.event;  

      //   console.log('///');
      // },false)
    }
  };
  
</script>

<style>
  .fater {
    width: 100%;
    overflow: scroll;
    background-color: cadetblue;
  }
</style>