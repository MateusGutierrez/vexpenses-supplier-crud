import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { LoggedUser, Store } from './interface';

export const userStore = create<Store>()(
  persist(
    set => ({
      loggedUser: null,
      token: null,
      setAuthToken: (token: string) => set({ token }),
      saveUser: (loggedUser: LoggedUser) => set({ loggedUser }),
      logout: () => set({ loggedUser: undefined, token: null })
    }),
    {
      name: 'session-user-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
