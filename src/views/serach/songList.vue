<template>
  <div class="list">
    <ul>
      <li v-for='song in songs' @click='playMusic(song.id)'>
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

          <div class="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <!-- 分割线 -->
        <div class="line"></div>
      </li>
      <div class="space"></div>
    </ul>
  </div>
</template>

<script>
  import bus from "../../bus"
  import axios from "axios"
  export default {
    name: 'songList',
    data() {
      return {
        songs: '',
      }
    },
    methods: {
      playMusic: function (musicId) {
        // console.log('playMusic'+new Date());
        axios.all([
          //播放指定歌曲
          axios({
            method: 'get',
            url: "https://v2.alapi.cn/api/music/url",
            params: {
              id: musicId,
              format: 'json',
              token: "36JffH6R63o8ZFTD",
              contentType: 'jsonp'
            }
          }),
        //点击一首歌获取该歌信息
        axios({
            method: 'get',
            url: 'https://v2.alapi.cn/api/music/detail',
            params: {
              id: musicId,
              token: "36JffH6R63o8ZFTD"
            }
          }),
        ]).then((res) => {
          bus.$emit('getSongMP3',res[0])
          bus.$emit('getSongMes',res[1])
        })
      }
    },
    mounted() {
      bus.$on('getSongs', (any) => {
        this.songs = any
      })
    }
  };
</script>

<style>
  .list {
    margin: 0 auto;
    margin-top: 0.5rem;
    width: 14.5rem;
    height: 100%;
    background-color: white;
  }

  .list ul {
    margin: 0;
    padding: 0;
    list-style: none;
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