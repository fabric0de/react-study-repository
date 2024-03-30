import { createContext, useContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = CounterContext.Provider;

export const useCounterStore = () => useContext(CounterContext);
