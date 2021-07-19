<template>
  <div id="comment_head">
    <div class="head_img">
      <img :src="mes_song_img" alt />
    </div>
    <div class="headmes">
      <div class="head_title">{{mes_song_title}}</div>
      <div class="head_author">{{mes_song_author}}</div>
    </div>
  </div>
</template>

<script>
import "./css/comment_head.css"
export default {
  name: "comment_head",
  data() {
    return {};
  },
  props: ["mes_song_title", "mes_song_author", "mes_song_img"]
};
</script>

<style>
</style>