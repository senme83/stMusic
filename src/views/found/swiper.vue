<template>
  <div class="block">
    
    <el-carousel 
    trigger="click" 
    height="6rem"
    indicator-position="none"
    >
      <el-carousel-item v-for="item in swiper_img" :key="item">
        <a href="#"><img :src=item alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data () {
    return {
      swiper_img : [
        "https://z3.ax1x.com/2021/07/10/RzruFI.jpg",
        "https://z3.ax1x.com/2021/07/10/Rzrewd.jpg",
        "https://z3.ax1x.com/2021/07/10/RzrKYt.jpg",
        "https://z3.ax1x.com/2021/07/10/RzrmTA.jpg",
        "https://z3.ax1x.com/2021/07/10/RzrZeH.jpg",
        "https://z3.ax1x.com/2021/07/10/RzrMfP.jpg"
      ]
    }
  }
};
</script>

<style>
.block{
  margin-bottom: 1rem;
}
.el-carousel {
  width: 14.7rem;
  margin: 0.5rem  auto;
  border-radius: 0.4rem;
}

.el-carousel__item img{
  width: 100%;
  height: 100%;
}

</style>