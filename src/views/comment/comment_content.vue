<template>
  <div id="comment_content">
    <ul>
      <li v-for="(item,index) in mes_song_content" :key="index">
        <div class="comment_content_box">
          <div class="content_mes">
            <div class="content_mes_img">
              <img :src="item.avatar_url" alt />
            </div>
            <div class="content_mes_nd">
              <div class="content_mes_name">
                <p>{{item.nickname}}</p>
              </div>
              <div class="content_mes_data">
                <p>{{item.published_date}}</p>
              </div>
            </div>
            <div class="gongBtn">
              <img src="../../assets/icon/comment_icon/zan.svg" alt="">
            </div>
          </div>
          <div class="content_content">
            <p>{{item.content}}</p>
          </div>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import "./css/comment_content.css";
export default {
  name: "comment_content",
  props: ["mes_song_content"]
};
</script>

<style>
</style>