import { create } from 'zustand';
// import { decodeToken } from 'react-jwt';
import { getToken, setToken, removeToken } from '../utils/helpers';

const useAuthStore = create((set) => ({
  token: null,
  user: null,
  isLoggedIn: false,

  login: (token, user) => {
    setToken(token);
    set({
      token,
      user,
      isLoggedIn: true,
    });
  },

  logout: () => {
    removeToken();
    set({
      token: null,
      user: null,
      isLoggedIn: false,
    });
  },

  initializeAuth: () => {
    const storedToken = getToken();
    if (storedToken) {
      set({
        token: storedToken,
        user: "Unavailable",
        isLoggedIn: true,
      });
    }
  }
}));

export default useAuthStore;
