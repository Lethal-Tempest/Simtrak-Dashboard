import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopContext = createContext();

export const useShopContext = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [selected, setSelected] = useState('tasks');
  const navigate = useNavigate();

  const navbarItems = [
    { id: 'tasks', icon: 'fa-tasks', dest: '/'},
    { id: 'dashboard', icon: 'fa-home', dest: '/'},
    { id: 'codepen', icon: 'fa-codepen', dest: '/trainees'},
    { id: 'list', icon: 'fa-list', dest: '/taskManagement'},
    { id: 'laptop', icon: 'fa-laptop', dest: '/wfh'},
    { id: 'user', icon: 'fa-user', dest: '/profile'},
    { id: 'logout', icon: 'fa-power-off', dest: '/logout'},
  ];

  return (
    <ShopContext.Provider value={{ navbarItems, selected, setSelected, navigate }}>
      {children}
    </ShopContext.Provider>
  );
};
