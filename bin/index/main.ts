import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { STORE, KEY } from './store';
import pageModuleMixin from '@/mixins/page-module';
import { registerReportDirective } from '@/libs/vue-utils';

const app = createApp(App);

app.mixin(pageModuleMixin);
registerReportDirective(app);

const run = () => {
  app
    .use(STORE, KEY)
    .use(router)
    .mount('#app');
};

run();
