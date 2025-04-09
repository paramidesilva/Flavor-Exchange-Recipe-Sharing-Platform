//context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const USER_KEY = 'currentUser';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(USER_KEY);
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (existingUser) {
      localStorage.setItem(USER_KEY, JSON.stringify(existingUser));
      setUser(existingUser);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const signup = (username, password) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.some((u) => u.username === username);
    if (exists) return { success: false, message: 'User already exists' };

    const newUser = { username, password, savedRecipes: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
