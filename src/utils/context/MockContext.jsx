import React, { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isUsingMockData, setIsUsingMockData] = useState(false);

  return (
    <DataContext.Provider value={{ isUsingMockData, setIsUsingMockData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
