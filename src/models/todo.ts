import { createModel } from '@rematch/core';
import { RootModel } from '../store/models';

export const todo = createModel<RootModel>()({
  state: [
    {
      todo: 'Learn typescript',
      done: true,
    },
    {
      todo: 'Try immer',
      done: false,
    },
  ] as any[],
  reducers: {
    done(state) {
      // mutable changes to the state
      state.push({ todo: 'Tweet about it' });
      state[1].done = true;
      return state;
    },
    // when 'reset' reducer is executed, the state will be set
    // to 'undefined' because reducer doesn't return the next state
    reset(state) {
      state[0].done = false;
      return state;
    },
  },
});
