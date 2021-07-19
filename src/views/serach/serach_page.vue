<template>
  <div id="wapper">
    <serach_box></serach_box>
    <songList @emitMoresetShow="getMoresetIsTrue"></songList>
    <moreset v-show="moresetIsShow" @emit_moreset_false="getMoresetIsFalse"></moreset>
  </div>
</template>

<script>
import serach_box from "./serach_box.vue";
import songList from "./songList.vue";
import moreset from "./more_set.vue";

export default {
  name: "serach_page",
  data() {
    return {
      moresetIsShow: false
    };
  },
  components: {
    serach_box,
    songList,
    moreset
  },
  methods: {
    getMoresetIsFalse: function(mes) {
      this.moresetIsShow = mes; //false
    },
    getMoresetIsTrue: function(mes) {
      this.moresetIsShow = mes; //true
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`

    this.moresetIsShow = false
    next()
  },
  mounted() {
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>