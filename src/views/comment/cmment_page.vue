<template>
  <div id="comment">
    <div class="comment_back">
      <div @click="backClick" class="back">
        <span></span>
      </div>
      <p>评论</p>
    </div>
    <div v-if="commentIsshow">
      <comment_head
        :mes_song_title="song_title"
        :mes_song_author="song_author"
        :mes_song_img="song_img"
      ></comment_head>

      <comment_content :mes_song_content="host_comment"></comment_content>
      <br />
      <br />
    </div>
    <div v-else class="noneComment">该歌曲暂无评论</div>
  </div>
</template>

<script>
import comment_head from "./comment_head.vue";
import comment_content from "./comment_content.vue";

import axios from "axios";
export default {
  name: "comment",
  data() {
    return {
      musicId: "",
      song_title: "",
      song_author: "",
      song_img: "",
      host_comment: "",
      commentIsshow: true
    };
  },
  meta: {
     keepAlive: false 
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    from.meta.keepAlive = false
    next()
  },
  methods: {
    backClick: function backClick() {
      this.$router.replace("/serach");
    }
  },
  components: {
    comment_head,
    comment_content
  },
  mounted() {
    this.musicId = this.$route.query.musicId;
    axios({
      method: "get",
      url: "https://v2.alapi.cn/api/comment",
      params: {
        token: "36JffH6R63o8ZFTD",
        id: this.musicId
      }
    }).then(mes => {
      let comment = mes.data.data;
      if (comment != null) {
        this.song_title = comment.title;
        this.song_author = comment.author;
        this.song_img = comment.image;
        this.host_comment = comment.hot_comment;
      } else {
        this.commentIsshow = false
      }
    });
  }
};
</script>

<style>

#comment {
  width: 16rem;
  overflow: hidden;
  word-break: break-all;
  background-color: #fff;
  position: relative;
  z-index: 2;
}
.comment_back {
  width: 14rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 0.8rem;
}
.comment_back p {
  margin-right: 9.5rem;
}
.comment_back .back {
  position: relative;
  left: 0.5rem;
  width: 2rem;
  height: 2rem;
}
.comment_back .back span {
  display: inline-block;
  width: 0.6rem;
  height: 0.6rem;
  border-left: 0.05rem solid black;
  border-bottom: 0.05rem solid black;
  transform: rotate(45deg);
}
.noneComment{
  text-align: center;
  margin: 1rem;
}
</style>