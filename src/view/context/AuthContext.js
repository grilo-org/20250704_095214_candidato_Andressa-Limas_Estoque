import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      alert('Login realizado com sucesso!');
    } catch (error) {
      alert('Erro no login: ' + error.response.data.error);
    }
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    alert('Logout realizado com sucesso!');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
