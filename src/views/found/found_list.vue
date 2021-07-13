<template>
  <div id="found_list">
    <p>每日一图</p>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "foundlist",
    data() {
      return {
        imgSrc: "fadsf",
      };
    },
    methods: {

    },
    mounted() {
      axios({
        method: 'get',
        url: 'https://v2.alapi.cn/api/bing',
        params: {
          token: '36JffH6R63o8ZFTD',
          format: 'json'
        }
      }).then((res) => {
        this.imgSrc = res.data.data.bing
      })
    }
  };
</script>

<style >
  #found_list{
    margin: 0 auto;
    width: 90%;
  }
  #found_list p{
    text-align: center;
    font-size: 0.8rem;
  }
  #found_list img {
    width: 100%;
    border-radius: 5%;
  }
</style>