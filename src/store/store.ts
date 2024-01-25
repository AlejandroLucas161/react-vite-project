import { create } from "zustand";

type Store = {
  title: string;
  setTitle: (title: string) => void;
};

const useStore = create<Store>((set) => ({
  title: "Vite + React + TS",
  setTitle: (title: string) => set({ title }),
}));

export default useStore;
