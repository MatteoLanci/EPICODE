import React, { createContext, useState } from "react";

const SelectCategoryContext = createContext();

const SelectCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("fantasy");

  return (
    <SelectCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectCategoryContext.Provider>
  );
};

export { SelectCategoryContext, SelectCategoryProvider };
