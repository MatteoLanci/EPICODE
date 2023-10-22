/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export const myNavLinks = [
  { id: 1, title: "Home", href: "/", className: "active nav-link" },
  { id: 2, title: "About", href: "#", className: " nav-link" },
  {
    id: 3,
    title: "Browse",
    href: "#",
    className: "",
    dropdown: true,
    dropdownItems: [
      {
        id: 5,
        title: "Horror",
        category: "horror",
        className: " nav-link",
      },
      {
        id: 4,
        title: "Sci-Fi",
        category: "scifi",
        className: " nav-link",
      },
      {
        id: 6,
        title: "Fantasy",
        category: "fantasy",
        className: " nav-link",
      },
      {
        id: 7,
        title: "History",
        category: "history",
        className: " nav-link",
      },
      {
        id: 8,
        title: "Romance",
        category: "romance",
        className: " nav-link",
      },
    ],
  },
];
