import React, { createContext, useState } from "react";

const SelectedAuthorContext = createContext();

const SelectedAuthorProvider = ({ children }) => {
  const [selectedAuthor, setSelectedAuthor] = useState([]);

  return (
    <SelectedAuthorContext.Provider
      value={{ selectedAuthor, setSelectedAuthor }}
    >
      {children}
    </SelectedAuthorContext.Provider>
  );
};

export { SelectedAuthorContext, SelectedAuthorProvider };
