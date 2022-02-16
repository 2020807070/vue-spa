<template>
  <div
    class="index space"
    :style="{ paddingTop, paddingBottom }"
    v-report-exp="{
      EventCode: 'news_h5_common_view',
      Params: { activityId: 'newsinner_name' },
      Direct: true,
      once: true,
    }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { onWebCellReady } from '@tencent/qqnews-jsapi';
import { useTheme, useCellPosition, setWebCell, getCellAspectRatio } from '@/libs/webcell';

export default defineComponent({
  props: {},
  components: {},
  ref: {},
  setup() {
    // 日夜间
    const { theme, setBodyTheme } = useTheme();

    watch(
      () => theme.value,
      (newTheme) => {
        setBodyTheme(newTheme);
      },
    );

    const { paddingTop, paddingBottom } = useCellPosition();

    // 初始化cell
    const initCell = () => {
      const aspectRatio = getCellAspectRatio();
      if (aspectRatio) {
        setWebCell({ aspectRatio, needFullWidth: true });
        onWebCellReady();
      }
    };

    onMounted(() => {
      // 设置日夜间模式，改变 body 的 class
      setBodyTheme(theme.value);
      // 如果存在网络调用，可以在网络请求成功后在调用
      initCell();
    });

    return {
      theme,
      paddingTop,
      paddingBottom,
    };
  },
});
</script>
<style scoped lang="postcss">
.night {
  background-color: #1f1f1f;
}
.index {
  position: relative;
}
</style>
