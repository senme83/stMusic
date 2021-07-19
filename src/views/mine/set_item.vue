<template>
  <div id="setitem">
    <div class="setitemBox">
      <div class="setIcon">
        <slot name="setIcon">
        </slot>
      </div>
      <div class="setContent">
        <slot name="setContent">
        </slot>
      </div>
      <div class="setBtn">
        <span></span>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import "./css/set_item.css";
export default {
  name: "setitem"
};
</script>

<style>
</style>