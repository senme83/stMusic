<template>
  <div id="nav_item">
    <a href="#">
      <slot name="navImg"></slot>
      <slot name="navName"></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "navitem"
};
</script>

<style>
#nav_item{
  
  width: 3.75rem;
  height: 4rem;
}
a {
  display: block;
  text-align: center;
  margin: .25rem;
  text-decoration: none;
  color: #000;
}
a img {
  border-radius: .5rem;
  width: 1.8rem;
  height: 1.8rem;
  vertical-align: middle;
  box-shadow: 0rem -0.25rem .25rem #999999;
}
a p {
  margin-top: .15rem;
  text-align: center;
  font-size: .75rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>