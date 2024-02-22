import { create } from "zustand";

interface TestAuth {
  name: string;
  age: number;
  isLoggedin: boolean;
  setLogin: () => void;
  setLogout: () => void;
  setName: (newName: string) => void;
  consoleName: () => void;
}

const useTestAuthStore = create<TestAuth>((set) => ({
  name: "prev",
  age: 0,
  isLoggedin: false,
  consoleName: () => console.log(),
  setLogin: () =>
    set((state) => ({
      name: state.name,
      age: state.age,
      isLoggedin: true,
    })),
  setLogout: () =>
    set(() => ({
      name: "prev",
      age: 0,
      isLoggedin: false,
    })),
  setName: (newName: string) => set(() => ({ name: newName })),
}));

export default useTestAuthStore;
