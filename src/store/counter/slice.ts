import { setStoreStateTeste } from '..';
import { CounterActions, CounterState } from './types';

const sliceKey = 'counter';

export const counterState = (): CounterState => ({
  total: 0,
});

export const counterActions: CounterActions = {
  increment: (value: CounterState['total']) => {
    setStoreStateTeste(sliceKey, (state: CounterState): CounterState => {
      return {
        total: state.total + value,
      };
    });
  },
  decrement: (value: CounterState['total']) => {
    setStoreStateTeste(sliceKey, (state: CounterState): CounterState => {
      return {
        total: state.total - value,
      };
    });
  },
};
