import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuth = create(
  persist(
    (set) => ({
      auth: {
        isAuth: false,
        token: null,
        user: null
      },
      connexion: (token, user) => set({ auth: {isAuth: true, token: token, user: user} }),
      logout: () => set({auth: {isAuth: false, token: null, user: null}})
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)