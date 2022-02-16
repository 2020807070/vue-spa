import { ActionTree } from 'vuex';
import { State, TodoItem, MutationTypes } from './types';

// 示例 action 通过 store.dispatch(ActionTypes.<EVENT_NAME>) 调用
export enum ActionTypes {
  FETCH_TODO_LIST = 'FETCH_TODO_LIST',
}

export const ACTIONS: ActionTree<State, State> = {
  [ActionTypes.FETCH_TODO_LIST]({ commit }) {
    const mockTodoList: TodoItem[] = [{ id: 1, text: '项目初始化', done: true }];
    commit(MutationTypes.SET_TODO_LIST, mockTodoList);
  },
};
