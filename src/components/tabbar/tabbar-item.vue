<template>
  <div id="tabbaritem" @click='clickItem'>
    <slot v-if="!isActive" name="itemIcon"></slot>
    <slot v-else name="itemIconAction"></slot>
    <div :class="{active:isActive}"><slot name="itemName"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'tabbaritem',
    data () {
      return {
        // isActive:false
      }
    },
    props: {
      path:String
    },
    computed: {
      isActive() {
        return this.$route.path === this.path
      }
    },
    methods: {
      clickItem: function () {
        this.$router.replace(this.path)
      }
    }
  };
</script>

<style>
  #tabbaritem {
    flex: 1;
    text-align: center;
  }
  .active{
    color: red;
  }
</style>