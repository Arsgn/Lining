import { create } from "zustand";

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  register: async (email, password) => {
    set({ loading: true, error: null });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === "arsenkonurbaev122@gmail.com" && password === "1234") {
        const user = {
          email,
          token: "mock-token-123",
        };
        localStorage.setItem("auth_user", JSON.stringify(user));
        set({ user });
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (err: any) {
      set({ error: err.message });
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    localStorage.removeItem("auth_user");
    set({ user: null });
  },

  initAuth: () => {
    const saved = localStorage.getItem("auth_user");
    if (saved) {
      set({ user: JSON.parse(saved) });
    }
  },
}));
