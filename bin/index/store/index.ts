import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { STATE } from './state';
import { State } from './types';
import { GETTERS } from './getters';
import { ACTIONS } from './action';
import { MUTATIONS } from './mutations';

export const STORE = createStore<State>({
  state: STATE,
  getters: GETTERS,
  mutations: MUTATIONS,
  actions: ACTIONS,
});

export const KEY: InjectionKey<Store<State>> = Symbol();

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(KEY);
}

export default {
  STORE,
  KEY,
  useStore,
};
