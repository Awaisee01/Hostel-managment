// src/context/MyContext.js
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const contextValue = { basename: '/' }; // Provide your actual context value here

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};
