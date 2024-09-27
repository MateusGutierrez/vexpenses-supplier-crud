import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () =>
        set((state) => ({
          isDark: !state.isDark,
        })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
