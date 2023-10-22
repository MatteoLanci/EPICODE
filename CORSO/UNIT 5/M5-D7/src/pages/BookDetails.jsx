import React, { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import { useParams } from "react-router-dom";
import fantasyJson from "../components/MainContent/LatestReleases/data/fantasy.json";
import horrorJson from "../components/MainContent/LatestReleases/data/horror.json";
import scifiJson from "../components/MainContent/LatestReleases/data/scifi.json";
import historyJson from "../components/MainContent/LatestReleases/data/history.json";
import romanceJson from "../components/MainContent/LatestReleases/data/romance.json";

import { QueryProvider } from "../context/QueryContext";
import { ThemeProvider } from "../context/ThemeContext";
import { SelectedProvider } from "../context/SelectedContext";
import {
  SelectCategoryContext,
  // SelectCategoryProvider,
} from "../context/SelectCategoryContext";

import MyNav from "../components/navigationBar/MyNav";
import MyFooter from "../components/MyFooter/MyFooter";

const BookDetails = () => {
  const { asin } = useParams();

  const { selectedCategory } = useContext(SelectCategoryContext);

  let data = [];
  // const loading = false;
  // const error = null;

  switch (selectedCategory) {
    case "horror":
      data = horrorJson;
      break;

    case "scifi":
      data = scifiJson;
      break;

    case "history":
      data = historyJson;
      break;

    case "romance":
      data = romanceJson;
      break;

    case "fantasy":
      data = fantasyJson;
      break;

    default:
      break;
  }

  useEffect(() => {
    console.log(selectedCategory);
  }, [asin, selectedCategory]);

  const book = data.find((item) => item.asin === asin);

  return (
    <ThemeProvider>
      <QueryProvider>
        <SelectedProvider>
          <>
            <MyNav />
            {book ? (
              <div
                className="d-flex flex-column align-items-center justify-content-center gap-3"
                style={{ marginTop: "7rem" }}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  style={{ width: "400px" }}
                />
                <p>Title: {book.title}</p>
                <p>in: {book.category}</p>
              </div>
            ) : (
              <h5>Book not found.</h5>
            )}
            <MyFooter />
          </>
        </SelectedProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};

export default BookDetails;
