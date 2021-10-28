import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * 获取当前鼠标点击事件，当前屏幕的坐标
 */

export default function () {
  let x = ref<number>(0)
  let y = ref<number>(0)
  // ts文件， e的类型应该是 MouseEvent
  let pageHander=function(e: MouseEvent){
    x.value=e.pageX
    y.value=e.pageY
  }
  // 需要使用生命周期函数，页面加载完成
  onMounted(()=>{
    window.addEventListener("click",pageHander)
  })

  // 在页面即将卸载时，移除事件的监听
  onBeforeUnmount(()=>{
    window.removeEventListener("click",pageHander )
  })
  return {x,y}
}