<template>
  <div id="wapper">
    <serach_box></serach_box>
    <songList></songList>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import serach_box from './serach_box.vue';
  import songList from './songList.vue';
  export default {
    name: 'serach_page',
    components: {
      serach_box,
      songList,
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>