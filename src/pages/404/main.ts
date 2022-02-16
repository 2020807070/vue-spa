/* eslint-disable @typescript-eslint/no-explicit-any */
// 全局变量设置
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { STORE, KEY } from './store';
import { IS_qqnews, IS_ios, IS_android } from '@/libs/ua';
import { loadjs } from '@/libs/util';
import pageModuleMixin from '@/mixins/page-module';
import ObserveVisibility from '@/libs/reports/report-exposure';
import ReportClick from '@/libs/reports/report-click';
import ReportView from '@/libs/reports/report-view';

const app = createApp(App);
app.directive('report-view', ReportView);
app.directive('report-exp', ObserveVisibility);
app.directive('report-click', ReportClick);
app.mixin(pageModuleMixin);

const run = () => {
  // /* eslint-disable */
  // const app =  createApp({
  //   el: "#app",
  //   store,
  //   router,
  //   pageModule: "",
  //   render: h => h(App),
  // });
  app
    .use(STORE, KEY)
    .use(router)
    .mount('#app');
};

const bootstrap = (func: any) => {
  func?.();
};
const iosStar = () => {
  // 如果在iframe中或存在TencentNews
  if (window.TencentNews) {
    bootstrap(run);
  } else {
    document.addEventListener('TencentNewsJSInjectionComplete', () => {
      bootstrap(run);
    });
  }
};
if (IS_qqnews) {
  if (IS_ios) {
    iosStar();
  }
  if (IS_android) {
    loadjs('//mat1.gtimg.com/www/js/newsapp/jsapi/news_test.js', () => {
      bootstrap(run);
    });
  }
} else {
  bootstrap(run);
}
