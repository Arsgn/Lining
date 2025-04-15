import { create } from "zustand";

// Типизация состояния
interface Store {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Создаем Zustand хранилище
const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Пример использования состояния из хранилища
console.log(useStore.getState().count); // 0
useStore.getState().increment();
console.log(useStore.getState().count); // 1
