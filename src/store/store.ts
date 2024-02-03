import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TaskListType = {
  id: string | number | null;
  title: string;
  tasks?: [] | null;
  isEditing?: boolean;
};

type Store = {
  title: string;
  setTitle: (title: string) => void;

  // Lists
  lists: Array<TaskListType> | [];
  setLists: (list: TaskListType) => void;
  deleteAllLists: () => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      title: "Vite + React + TS",
      setTitle: (title: string) => set({ title }),

      // Lists
      lists: [],
      setLists: (list: TaskListType) =>
        set((state) => ({ lists: [...state.lists, list] })),
      deleteAllLists: () => set({ lists: [] }),
    }),
    { name: "general-store" }
  )
);

export default useStore;
