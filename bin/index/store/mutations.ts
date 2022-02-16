import { MutationTree } from 'vuex';
import { State, Mutations } from './types';

// 示例 mutation 通过 store.commit(MutationTypes.<MUTATION_NAME>) 调用
export enum MutationTypes {
  SET_TODO_LIST = 'SET_TODO_LIST',
}

export const MUTATIONS: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TODO_LIST](state, payload) {
    state.todoList = payload;
  },
};
