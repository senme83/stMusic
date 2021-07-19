<template>
  <div id="more_set">
    <div class="hideBtn" @click="hideBtnClick"></div>
    <div class="more_set_box">
      <div class="more_set_box_item">
        <div class="msbx_icon">
          <img src="../../assets/icon/search_icon/xiazai.svg" alt />
        </div>
        <div class="msbx_content">
          <p>下载</p>
        </div>
      </div>
      <div @click="msbxClick" class="more_set_box_item">
        <div class="msbx_icon">
          <img src="../../assets/icon/search_icon/pinglun.svg" alt />
        </div>
        <div class="msbx_content">
          <p>评论</p>
        </div>
      </div>
      <div class="more_set_box_item">
        <div class="msbx_icon">
          <img src="../../assets/icon/search_icon/fenxiang.svg" alt />
        </div>
        <div class="msbx_content">
          <p>分享</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./css/more_set.css";
import bus from "../../bus.js";
export default {
  name: "moreset",
  data() {
    return {
      moresetIsShow: false
    };
  },
  mounted() {
    bus.$on("emitMusicId", mes => {
      this.musicId = mes;
    });
    
  },
  methods: {
    hideBtnClick: function() {
      this.$emit("emit_moreset_false", this.moresetIsShow);
    },
    msbxClick: function() {
      this.$router.push({path:'/comment',query: {musicId:this.musicId}})
    }
  }
};
</script>

<style>
</style>