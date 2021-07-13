<template>
  <div class="minAudio" v-show='minAudioIsShow'>
    <div class="minAudioBox">
      <div class="minSongMes">
        <div class="minImg">
          <img :src="minImgSrc" alt="">
        </div>
        <div class="minSong">
          <p class="p1" style="font-size: 0.9rem !important;">{{minSong}}</p>
          <p class="p2" style="font-size: 0.5rem;">&nbsp; - &nbsp;{{minSonger}}</p>
        </div>
      </div>
      <div class="play" @click='minPlayOrPause'>
        <div class="circleProgress_wrapper">
          <div class="wrapper left">
            <div class="circleProgress leftcircle"></div>
          </div>
          <div class="wrapper right">
            <div class="circleProgress rightcircle"></div>
          </div>
        </div>
        <span>
          <!-- 播放按钮 -->
          <div class="playingBtn" v-show='playingBtn'></div>
          <!-- 暂停按钮 -->
          <div class="pausingBtn" v-show='pausingBtn'></div>
        </span>
        <audio class="myAudio" :src="audioUrl" :autoplay="play">
          该浏览器不支持播放
        </audio>
      </div>
      <!-- 进度条1.0, 直线进度条 -->
      <!-- <div class="progressBar"> -->

    </div>
  </div>
  </div>
</template>

<script>
  import bus from "../bus"
  import axios from "axios"
  import $ from "jquery"
  import "less"
  export default {
    name: 'minAudio',
    data() {
      return {
        audioUrl: '',
        play: '',
        playingBtn: true,
        pausingBtn: false,
        minImgSrc: '',
        minSong: '',
        minSonger: '',
        minAudioIsShow: false,
      }
    },
    methods: {
      // 点击小窗口按钮控制播放与暂停
      minPlayOrPause: function () {
        //audio标签的属性：播放：play() 暂停：pause() 
        //paused 返回true表示暂停播放，false表示正在播放
        var playBtn = document.querySelector('audio')
        if (playBtn.paused) {
          //进度条动画继续执行
          $('.rightcircle').css('animationPlayState', 'running')
          $('.leftcircle').css('animationPlayState', 'running')
          playBtn.play()
          this.playingBtn = !this.playingBtn
          this.pausingBtn = !this.pausingBtn
        } else {
          //进度条动画暂停
          $('.rightcircle').css('animationPlayState', 'paused')
          $('.leftcircle').css('animationPlayState', 'paused')
          playBtn.pause()
          this.playingBtn = !this.playingBtn
          this.pausingBtn = !this.pausingBtn
        }
      },

    },
    created() {
      // console.log('created');
    },
    mounted() {
      bus.$on('getSongMP3', (any) => {
        // console.log(any.data.data.url);
        initMinfontSize()
        this.audioUrl = any.data.data.url
        this.play = 'autoplay'
        this.playingBtn = true
        this.pausingBtn = false
      })
      bus.$on('getSongMes', (any) => {
        this.minImgSrc = any.data.data.songs[0].al.picUrl
        this.minSong = any.data.data.songs[0].name
        this.minSonger = any.data.data.songs[0].ar[0].name
      })
      // 监听音乐播放开始
      $(".myAudio")[0].addEventListener("play", () => {
        console.log("音乐开始");
        // 弹出小播放器
        this.minAudioIsShow = true
        // 执行进度条
        beginCirProgress()  //圆形
      });
      // 监听音乐播放暂停
      $(".myAudio")[0].addEventListener("pause", () => {
        console.log("音乐暂定");
      })
      // 监听音乐播放结束
      $(".myAudio")[0].addEventListener("ended", () => {
        console.log("音乐结束")
        this.minAudioIsShow = false
      }, false);

    }
  };
  // 获取音频时间并执行圆形进度条
  function beginCirProgress() {
    //清空进度条
    // ......
    console.log('执行进度条');
    var aud = $(".myAudio")[0];
    console.log("歌曲时长：" + aud.duration);
    // 显示并设置进度条动画时间
    $('.circleProgress_wrapper').css('display', 'block')
    $('.rightcircle')
      .css('animationDuration', aud.duration + 's')
    $('.leftcircle')
      .css('animationDuration', aud.duration + 's')
  }

  // 进度条动画重新开始
  function reStartCirProgress() {
    $('.rightcircle')
  }
  //解决歌名过长导致换行问题
  var initMinfontSize = () => {
    $(document).ready(function () {
      // 获取p1的字数
      var wordNumber = $(".p1").html().length;
      // console.log(wordNumber);
      var fontSize = wordNumber > 5 ? '0.6rem' : '0.9rem';
      $(".p1").css('font-size', fontSize)
    });

  }


</script>

<style scoped>
  .minAudio .minAudioBox {
    width: 100%;
    height: 2.45rem;
    position: fixed;
    bottom: 2rem;
    display: flex;
    background-color: white;
    animation: minAudio 0.5s ease-out;
  }

  @keyframes minAudio {
    from {
      bottom: -2.45rem;
    }

    to {
      bottom: 0;
    }
  }

  .minAudio .minAudioBox .minSongMes {
    display: flex;
    width: 11rem;
    height: 100%;
  }

  .minAudio .minAudioBox .minSongMes .minImg {
    flex-basis: 1.8rem;
    height: 1.8rem;
  }

  .minAudio .minAudioBox .minSongMes .minImg img {
    margin-left: 0.2rem;
    border: 0.3rem solid black;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .minAudio .minAudioBox .minSongMes .minSong {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .minAudio .minAudioBox .play {
    display: flex;
    margin: auto;
  }

  .minAudio .minAudioBox .play span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.05rem solid rgba(31, 29, 29, 0.329);
    border-radius: 50%;
  }

  .minAudio .minAudioBox .play span .playingBtn {
    width: 0.2rem;
    height: 0.8rem;
    border-left: 0.2rem solid black;
    border-right: 0.2rem solid black;
  }

  .minAudio .minAudioBox .play span .pausingBtn {
    margin-left: 0.2rem;
    border-right: 0.4rem solid transparent;
    border-left: 0.4rem solid transparent;
    border-bottom: 0.6rem solid black;
    transform: rotate(90deg);
  }


  .circleProgress_wrapper {
    width: 1.6rem;
    height: 1.6rem;
    position: relative;
    left: 1.6rem;
  }

  .circleProgress_wrapper .wrapper {
    width: 0.8rem;
    height: 1.6rem;
    position: absolute;
    top: 0;
    overflow: hidden;
  }

  .circleProgress_wrapper .right {
    right: 0;
  }

  .circleProgress_wrapper .left {
    left: 0;
  }

  .circleProgress_wrapper .circleProgress {
    width: 1.28rem;
    height: 1.28rem;
    border: 0.16rem solid black;
    border-radius: 50%;
    position: absolute;
    top: 0;
  }

  .circleProgress_wrapper .rightcircle {
    border-top: 0.16rem solid white;
    border-right: 0.16rem solid white;
    right: 0;
    transform: rotate(-45deg);
    animation: circleProgressLoad_right 0s linear infinite;
  }

  .circleProgress_wrapper .leftcircle {
    border-bottom: 0.16rem solid white;
    border-left: 0.16rem solid white;
    left: 0;
    transform: rotate(-135s 0.1deg);
    animation: circleProgressLoad_left 0s linear infinite;
  }

  @keyframes circleProgressLoad_right {
    0% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(225deg);
    }

    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes circleProgressLoad_left {
    0% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes circleProgressLoad_right1 {
    0% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(225deg);
    }

    100% {
      transform: rotate(225deg);
    }
  }

  @keyframes circleProgressLoad_left1 {
    0% {
      transform: rotate(45deg);
    }

    50% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(225deg);
    }
  }
</style>