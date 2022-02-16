<template>
  <div
    class="index"
    v-report-exp="{
      EventCode: 'news_h5_common_view',
      Params: { activityId: 'newsinner_name' },
      Direct: true,
      once: true,
    }"
  >
    <div v-for="todo in todoList" :key="todo.id">
      <input :checked="todo.done" name="todo" type="checkbox" />
      <label for="todo">{{ todo.text }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from './store/index';
import { ActionTypes } from './store/types';

export default defineComponent({
  props: {},
  components: {},
  ref: {},
  setup() {
    const store = useStore();
    const todoList = computed(() => store.state.todoList);
    onMounted(() => {
      store.dispatch(ActionTypes.FETCH_TODO_LIST);
    });

    return {
      todoList,
    };
  },
});
</script>
