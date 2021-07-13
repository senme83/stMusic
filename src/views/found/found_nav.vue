<template>
  <div id="found_nav">
    <div id="found_nav_box">
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/gedan.png" alt=""><p slot="navName">每日推荐</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/Kge.png" alt=""><p slot="navName">私人FM</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/paihangbang.png" alt=""><p slot="navName">歌单</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/tuijian.png" alt=""><p slot="navName">排行榜</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/zhibo.png" alt=""><p slot="navName">直播</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/wodefangjian.png" alt=""><p slot="navName">歌房</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/yun.png" alt=""><p slot="navName">冥想</p></navitem>
      <navitem><img slot="navImg" src="../../assets/icon/nav_icon/youxi.png" alt=""><p slot="navName">游戏专区</p></navitem>
    </div>
  </div>
</template>

<script>
import navitem from "./nav_item.vue";
export default {
  name: "foundnav",
  components: {
  navitem
  }
};
</script>

<style>
  #found_nav{
    margin-bottom: 1.5rem;
  }
  #found_nav_box{
    display: flex;
    flex-wrap: wrap;
    height: 6.5rem;
    width: 15rem;
    margin: 0 auto;
  }
  navitem{
    flex-basis: 3.7rem;
    
  }
</style>