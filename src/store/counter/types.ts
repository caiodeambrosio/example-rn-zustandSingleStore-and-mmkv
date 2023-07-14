export type CounterState = {
  total: number;
};

export type CounterActions = {
  increment: (value: CounterState['total']) => void;
  decrement: (value: CounterState['total']) => void;
};
