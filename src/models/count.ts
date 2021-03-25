import { createModel } from '@rematch/core';
import { RootModel } from '../store/models';

type Names = 'custom';
type ComplexCount = {
  count: number;
  multiplierName?: Names;
};

export const count = createModel<RootModel>()({
  state: {
    count: 0,
    multiplierName: 'custom',
  } as ComplexCount, // <-
  reducers: {
    increment(state, payload: number) {
      return {
        count: state.count + payload,
      };
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, rootState) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      dispatch.count.increment(payload);
    },
  }),
});
