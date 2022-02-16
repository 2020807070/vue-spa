import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { RootState } from './modules/types';

export const STORE = createStore<RootState>({
  modules: {},
  state: {},
  mutations: {},
});
export const KEY: InjectionKey<Store<RootState>> = Symbol();
// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(KEY);
}
export default {
  STORE,
  KEY,
  useStore,
};
