<template>
  <div class="list" @scroll='scrolling'>
    <ul>
      <li v-for="(song,index) in songs" :key="index" @click="playMusic(song.id)" class="list-item">
        <div class="song">
          <div class="songBox">
            <div class="songName">
              <p>{{song.name}}</p>
            </div>
            <div class="songMessage">
              <p class="songer">{{song.artists[0].name}}</p>
              <p class="album">&nbsp; {{song.album.name}}</p>
            </div>
          </div>

          <div class="menu" @click.stop="menuClick(song.id)">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </li>
    </ul>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import bus from "../../bus";
  import axios from "axios";
  // 计算上划滚动次数
  let countUp = 0

  export default {
    name: "songList",
    data() {
      return {
        songs: "",
        // 滚动前，滚动条距文档顶部的距离
        oldScrollTop: 0,
      };
    },
    methods: {
      playMusic: function (musicId) {
        console.log("songId    " + musicId);
        axios
          .all([
            //播放指定歌曲
            axios({
              method: "get",
              url: "https://v2.alapi.cn/api/music/url",
              params: {
                id: musicId,
                format: "json",
                token: "36JffH6R63o8ZFTD",
                contentType: "jsonp"
              }
            }),
            //点击一首歌获取该歌信息
            axios({
              method: "get",
              url: "https://v2.alapi.cn/api/music/detail",
              params: {
                id: musicId,
                token: "36JffH6R63o8ZFTD"
              }
            })
          ])
          .then(res => {
            bus.$emit("getSongMP3", res[0]);
            bus.$emit("getSongMes", res[1]);
          });
      },
      menuClick: function (musicId) {
        this.$emit("emitMoresetShow", "true");
        bus.$emit("emitMusicId", musicId);
        console.log(musicId);
        // bus.$emit("emitMoresetIsShow",this.moresetIsShow)
      },
      listswiperup: function () {
        console.log('up！！！');
      },
      listswiperleft: function () {
        console.log('left！！！');
      },
      scrolling: function () {
        //根据两次滚动条距顶部距离的差值的正负判断滑动的方向
        let scrollTop = document.querySelector('.list').scrollTop
        let scrollStep = scrollTop - this.oldScrollTop;
        console.log(scrollStep);
        this.oldScrollTop = scrollTop;
        if (scrollStep < 0) {
          countUp ++
          if (countUp > 10) {
          //上滑且滚动次数超过10次显示搜索栏
            bus.$emit('scrollup',true)
          }
        } else {
          //下滑隐藏搜索栏
          countUp = 0
          bus.$emit('scrolldown',false)
        }
      }
    },
    computed: {
    },
    mounted() {
      bus.$on("getSongs", any => {
        this.songs = any;
      });
    },
  };
</script>

<style>
  .list {
    margin: 0 auto;
    margin-top: 0.5rem;
    width: 14.5rem;
    height: 28.4rem;
    overflow-y: scroll;
  }

  .list ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list ul li{
    background-color: #fff;
  }
  .list .song {
    display: flex;
    width: 100%;
    height: 3.2rem;
  }

  .list .song .songBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 13rem;
  }

  .list .song .songBox .songName {
    font-size: 0.75rem;
    height: 1.8rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }

  .list .song .songBox .songMessage {
    font-size: 0.5rem;
    display: flex;
    width: 100%;
    margin-left: 0.5rem;
  }

  .list .song .songBox .songMessage .songer {
    color: #1f3e53;
  }

  .list .song .songBox .songMessage .album {
    color: #b4b3b3;
  }

  .list .song .menu {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 100%;
    float: right;
  }

  .list .song .menu span {
    display: block;
    width: 0.15rem;
    height: 0.15rem;
    margin: 0.05rem;
    background-color: #8a8a8a;
    border-radius: 50%;
  }

  .list .space {
    background-color: white;
  }

  .list .line {
    width: 13.5rem;
    height: 0.05rem;
    margin: 0 auto;
    border-bottom: 0.05rem solid #cec8c8;
  }
</style>