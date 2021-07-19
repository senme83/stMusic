<template>
  <html>
  <div id="app">
    <keep-alive include="serach_page">
      <router-view></router-view>
    </keep-alive>
    <minAudio></minAudio>
    <tabbar class="tabbar"></tabbar>
  </div>

  </html>
</template>

<script>
  import tabbar from './components/tabbar/tabbar.vue'
  import minAudio from './components/minAudio.vue'
  import comment from './views/comment/cmment_page.vue'
  
  import initFontSize from './assets/js/fontSize.js'
  export default {
    name: 'app',
    components: {
      tabbar,
      minAudio,
      comment
    },
    created: function () {
      // 根据设备宽度动态计算HTML的字体大小
      initFontSize()
      document.querySelector('body').setAttribute(
        "style",
        `background:#f7f7f7;
        maxWidth:600px;
        minWidth:300px;
        fontSize:0.75rem;`
      )
    }
  };
</script>
<style>
  html {
    font-size: 20px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .app {
    max-width: 600px;
    min-width: 300px;
    font-size: 0.75rem;
  }
</style>