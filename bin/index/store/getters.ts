import { GetterTree } from 'vuex';
import { State } from './types';

// 示例 getter 用于计算属性 通过 store.getter[GetterTypes.<getterName>] 调用
export enum GetterTypes {
  doneTodoList = 'doneTodoList',
}

export const GETTERS: GetterTree<State, State> = {
  doneTodoList(state) {
    return state.todoList.filter((todo) => todo.done);
  },
};
