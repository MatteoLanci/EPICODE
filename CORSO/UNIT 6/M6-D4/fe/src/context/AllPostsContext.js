import React, { createContext, useState } from "react";

const AllPostsContext = createContext();

const AllPostsProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);

  return (
    <AllPostsContext.Provider value={(allPosts, setAllPosts)}>{children}</AllPostsContext.Provider>
  );
};

export { AllPostsContext, AllPostsProvider };
