import { create } from 'zustand';
import { UseStore } from './types';
import { createJSONStorage, persist } from 'zustand/middleware';
import { counterState } from './counter/slice';
import zustandStorage from '../utils/zustandStorage';
import { CounterState } from './counter/types';

const storeState: UseStore = {
  counter: counterState(),
};

const useStore = create<typeof storeState>()(
  persist(() => storeState, {
    name: 'root-storage',
    storage: createJSONStorage(() => zustandStorage),
  }),
);

export const setStoreStateTeste = <
  T extends keyof typeof storeState,
  K extends (v: (typeof storeState)[T]) => CounterState,
>(
  key: T,
  payload: K,
) => {
  useStore.setState(state => ({
    ...state,
    [key]: payload(useStore.getState()[key]),
  }));
};

export const setStoreState = <
  T extends keyof typeof storeState,
  K extends (typeof storeState)[T],
>(
  key: T,
  payload: K,
) => {
  useStore.setState(state => ({
    ...state,
    [key]: payload,
  }));
};

export default useStore;
