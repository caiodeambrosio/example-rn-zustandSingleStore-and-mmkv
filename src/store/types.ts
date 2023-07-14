import { CounterState } from './counter/types';

export type DefaultActions<A> = (set: any, get: any) => A;

export type UseStore = {
  counter: CounterState;
};
