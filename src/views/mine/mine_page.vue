<template>
  <div>
    <material></material>
    <set></set>
    <logout></logout>
    <br><br><br><br>
  </div>
</template>

<script>
import material from "./material.vue";
import set from "./set.vue";
import logout from "./logoutBtn.vue"
export default {
  name: "mine_page",
  components: {
    material,
    set,
    logout
  }
};
</script>

<style>
hr {
  color: #000;
}
</style>