<template>
  <div>
    <div class="serach" v-show='serachboxIsshow'>
      <div class="back">
        <span></span>
      </div>
      <div class="serachInput">
        <input :placeholder="placeholder" @keyup.enter="serach" v-model="serachContent" type="text" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import bus from "../../bus"

  export default {
    name: "serach_box",
    data() {
      return {
        placeholder: "陈奕迅",
        serachContent: "",
        serachboxIsshow: true
      };
    },
    methods: {
      serach: function () {
        //如果没有输入内容，则搜索占位符
        if (this.serachContent === "") {
          this.serachContent = this.placeholder;
        }
        var thisSongs = this;
        axios({
          method: 'get',
          url: "https://v2.alapi.cn/api/music/search",
          params: {
            token: "36JffH6R63o8ZFTD",
            //搜索的关键字
            keyword: this.serachContent,
            // 搜索类型 
            type: 1,
            //单页数量
            limit: 30
          }
        }).then((res) => {
          bus.$emit('getSongs', res.data.data.songs)
        });
      },
    },
    mounted() {
      bus.$on('scrollup', mes => {
        this.serachboxIsshow = true
      })
      bus.$on('scrolldown', mes => {
        this.serachboxIsshow = false
      })
    }
  };
</script>

<style>
  @keyframes search_frames {
    0% {
      transform: translatey(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .serach {
    width: 14rem;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 0.8rem;
    animation: search_frames 0.3s ease 1;
  }

  .serach .back {
    position: relative;
    left: 0.5rem;
    width: 2rem;
    height: 2rem;
  }

  .serach .back span {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    border-left: 0.05rem solid black;
    border-bottom: 0.05rem solid black;
    transform: rotate(45deg);
  }

  .serach .serachInput {
    flex-grow: 1;
  }

  .serach .serachInput input {
    font-size: .8rem;
    background-color: #f7f7f7;
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
  }
</style>