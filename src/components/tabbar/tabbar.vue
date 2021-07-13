<template>
  <div id="tabbar" v-if=true>
      <tabbaritem path="/found">
          <img slot="itemIcon" src="../../assets/icon/tabbar_icon/unactive/faxian.svg" alt="">
          <img slot="itemIconAction" src="../../assets/icon/tabbar_icon/active/faxian.svg" alt="">
          <p slot="itemName">发现</p>
      </tabbaritem>

      <tabbaritem path="/serach">
          <img slot="itemIcon" src="../../assets/icon/tabbar_icon/unactive/yinyue.svg" alt="">
          <img slot="itemIconAction" src="../../assets/icon/tabbar_icon/active/yinyue.svg" alt="">
          <p slot="itemName">觅歌</p>
      </tabbaritem>

      <tabbaritem path="/mine">
          <img slot="itemIcon" src="../../assets/icon/tabbar_icon/unactive/wode.svg" alt="">
          <img slot="itemIconAction" src="../../assets/icon/tabbar_icon/active/wode.svg" alt="">
          <p slot="itemName">我的</p>
      </tabbaritem>
  </div>
</template>

<script>
  import tabbaritem from './tabbar-item.vue'
  export default {
    name: 'tabbar',
    components: {
      tabbaritem
    }
  };
</script>

<style scoped>
  #tabbar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    height:2.2rem;
    background-color: white;
  }
  router-link{
    flex: 1;
  }
  img {
    width: 1rem;
    height: 1rem;
  }

  p {
    margin: 0 0 0 0;
    font-size: 0.7rem;
  }
</style>