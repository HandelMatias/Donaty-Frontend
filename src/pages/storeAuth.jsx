import { create } from "zustand";
import { persist } from "zustand/middleware";

const storeAuth = create(
  persist(
    (set) => ({
      token: null,
      rol: null,

      setToken: (token) => set({ token }),
      setRol: (rol) => set({ rol }),

      clearToken: () => {
        set({ token: null, rol: null });
        localStorage.removeItem("donatyToken");
        localStorage.removeItem("donatyUser");
        localStorage.removeItem("donatyAuthProvider");
        localStorage.removeItem("donatyHasPassword");
      },
    }),
    {
      name: "auth-donaty", // nombre del storage
    }
  )
);

export default storeAuth;
