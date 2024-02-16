import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ITask {
  id: string | number | null;
  task: string;
}

export type TaskListType = {
  id: string | number | null;
  title: string;
  tasks?: Array<ITask> | null;
  isAdding?: boolean;
};

type Store = {
  title: string;
  setTitle: (title: string) => void;

  // Lists
  lists: Array<TaskListType> | [];
  setLists: (list: TaskListType) => void;
  deleteAllLists: () => void;

  // Tasks
  tasks: Array<ITask> | [];
  setTasks: (task: ITask) => void;
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

      // Tasks
      tasks: [],
      setTasks: (task: ITask) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
    }),
    { name: "general-store" }
  )
);

export default useStore;
