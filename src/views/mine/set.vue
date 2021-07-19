<template>
  <div>
    <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/like.svg" alt />
     <p slot="setContent">我喜欢的音乐</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/xiaoxi.svg" alt />
     <p slot="setContent">我的消息</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/setTime.svg" alt />
     <p slot="setContent">定时关闭</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/jinzhi.svg" alt />
     <p slot="setContent">音乐黑名单</p>
   </setitem>

   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/clothes.svg" alt />
     <p slot="setContent">个性装扮</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/kefu.svg" alt />
     <p slot="setContent">我的客服</p>
   </setitem>

   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/fenxiang.svg" alt />
     <p slot="setContent">分享森听音乐</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/zhichi.svg" alt />
     <p slot="setContent">支持我们</p>
   </setitem>
   <setitem>
     <img slot="setIcon" src="../../assets/icon/set_icon/guanyu.svg" alt />
     <p slot="setContent">关于</p>
   </setitem>

  </div>
</template>

<script>
import setitem from './set_item.vue'
export default {
 name: 'set',
 components: {
  setitem  
 }
};
</script>

<style>
</style>