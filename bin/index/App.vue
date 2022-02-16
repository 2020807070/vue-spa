<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {},
  components: {},
  ref: {},
  setup() {
    // 初始化结束，隐藏index.html中的默认loading样式
    const pageLoading: HTMLElement | null = document.querySelector('.pageLoading');
    if (pageLoading) {
      pageLoading.style.display = 'none';
    }
    return {};
  },
});
</script>

<style lang="postcss">
@import '../../assets/normalize.css';

html,
body {
  &.hidden {
    overflow: hidden;
    height: 100%;
  }
}
html.borderbox *,
html.borderbox *:before,
html.borderbox *:after {
  box-sizing: border-box;
}

body {
  font-family: -apple-system-font, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei',
    'WenQuanYi Micro Hei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 26px;
  font-weight: 200;
  color: #41414e;
  margin: 0;
  padding: 0;
  border: 0;
}

body * {
  user-select: none;
}

body input,
body textarea {
  user-select: text;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

p,
h3,
h4,
dd,
dt {
  margin: 0;
}

#app {
}

.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
  text-align: center;
}
iframe#tcaptcha_iframe {
  position: fixed !important;
}
</style>
