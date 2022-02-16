import { ActionTree } from 'vuex';
import { MutationTypes } from './mutations';
import { ActionTypes } from './action';
import { GetterTypes } from './getters';

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

// 示例代码，请根据需要创建 State 及相应 mutation, action, getter
export interface State {
  todoList: TodoItem[];
}

export interface Getters {
  doneTodoList(state: State): TodoItem[];
}

export interface Mutations {
  [MutationTypes.SET_TODO_LIST](state: State, payload: TodoItem[]): void;
}

export interface Actions {
  [ActionTypes.FETCH_TODO_LIST](context: ActionTree<State, State>): void;
}

export interface RootState {
  state: State;
  mutations: Mutations;
  actions: Actions;
  getters: Getters;
}

export { ActionTypes, MutationTypes, GetterTypes };
