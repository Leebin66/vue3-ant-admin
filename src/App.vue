<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    let value = ref<number>(2);
    return {
      value,
    };
  },
});
</script>

<template>
  <div>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <a-rate v-model:value="value" />
    <span>测试变量</span>
    <p class="mixin-p">在打开谷歌地球这个软件之前，我没有读懂过鸡龙河的前世今生。鸡龙河在我老家岔河村西边的芦苇荡里蜿蜒流淌已有千年，村里的人，包括我的小学老师，还有读了十一年私塾的父亲，都给我说，那是西河。我知道，这个名字是村里人按河流在村子的位置，习惯而又亲切的称呼，因为不知道它的真实的名字，我的很多关于家乡的小说里，这条河都被我命名为颇能给岔河村带来富裕和吉祥的名字：富屯溪。
　　我在小说里曾这样描述：富屯溪像一条飘挂在村子左肩上的一条白色纱巾，越过连接县城和沂城的岚济公路，在村子北边一头扎进绿色汹涌的芦苇荡就沉醉不知归途，白练般的河水在村西边的那座三孔石拱桥上下舞蹈着，发出了时光维度里的哗哗水声，日夜响彻在我的心间，在午后橙色阳光的沐浴里，和着风吹芦苇的摇曳节奏，紧拥着一望无际澎湃延展的芦苇荡，浩浩荡荡地投入到西南方龙窝村西北边那条更大河流的怀抱。
　　谷歌地球让我的视线倏地变得远大和立体，用鼠标点开这个软件时，随着屏幕上转动在宇宙间的地球在眼前停止，对着山东省的方位，向上猛搓几下鼠标滑轮，犹如俯视，我准确地找到岔河村北的那条岚济公路，还有公路桥底下向南流淌的鸡龙河，只局限在我少年眼里的这条河流，像心仪已久的朋友，一下子向我敞开了胸怀，我看见它在岚济公路桥北东高榆村东的芦苇荡里，接纳了从沙窝、小赵家庄流来和从大王刘庄、赵家临沭流来的两条河流，瞬间让自己变得强大有力，所向既温和又披縻。
　　从沙窝、小赵家庄而来的河流在沙窝东北方拐了个大弯折向西北，然后在潘庄、夏庄东南边又拐向东北方向，在楼里村北边拐了个像黄河河套那样的大弯，然后一路向北，在大白常村东南角分岔向北再拐向东北，形成了个“羊角形”，拐向东北方的那条，在原刘家庄乡驻地东南边向正北方而去，再拐往东北方向就是于家湖，在这个村的正北方，与从东部涝坡镇鸡山而来流经县城北侧的河流会合。按我的判断，这条河流应是鸡龙河的主流。</p>
  </div>
</template>

<style scoped lang="scss">
  span {
    color: $color-primary;
  }
  .mixin-p {
    @include no-wrap();
    color: $color-primary
  }
</style>
