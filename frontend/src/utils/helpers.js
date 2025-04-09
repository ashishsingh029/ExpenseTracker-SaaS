export const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const tokenName = import.meta.env.VITE_JWT_TOKEN_NAME;

// export const baseUrlV1 = `${baseUrl}/v1`

export const getToken = () => localStorage.getItem(tokenName);
export const setToken = (token) => {
  localStorage.setItem(tokenName, token);
};
export const removeToken = () => {
    localStorage.removeItem(tokenName);
}

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
