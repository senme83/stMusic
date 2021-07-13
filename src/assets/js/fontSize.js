// 根据设备宽度动态计算HTML的字体大小
export default function() {
  let initWidth = () => {
    //获取根元素
    let html = document.documentElement
    //获取可视区的宽度
    let width = window.innerWidth
    // console.log('可视区宽度：'+width);
    // 控制最大宽度不超过640px
    width = width >= 640 ? 640 : width

    //我们定义1rem = 20px
    //320是设计稿的宽度（iPhone5/SE的宽度）
    let fontSize = 20 * (width / 320) + 'px'

    html.style.fontSize = fontSize
  }
  //监听设备屏幕的变化
  window.addEventListener('resize', initWidth);
  window.addEventListener('orientationchange', initWidth);
}
