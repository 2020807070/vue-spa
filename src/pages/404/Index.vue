<template>
  <div
    class="index"
    v-report-exp="{
      EventCode: 'news_h5_common_view',
      Params: { activityId: '404' },
      Direct: true,
      once: true,
    }"
  >
    <p class="icon"></p>
    <p class="text">您访问的页面不存在</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {},
  components: {},
  ref: {},
  setup() {
    return {};
  },
});
</script>
<style scoped lang="postcss">
.index {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.icon {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 90px;
  background: url(https://mat1.gtimg.com/qqcdn/xw/article-images/image-404-new.svg) left top / 100% 100%;
}
.text {
  font-size: 16px;
  text-align: center;
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
}
</style>
