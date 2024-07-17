import * as React from "react";

import { VerticalResults } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";

import BookCard from "./BookCard";
import GenerativeAnswer from "./GenerativeAnswer";

const SearchResults = () => {
  console.log("search results are");
  const searchState = useSearchState((state) => state.vertical.results);
  console.log(searchState);
  return (
    <>
      <GenerativeAnswer />
      <VerticalResults CardComponent={BookCard} />
    </>
  );
};

export default SearchResults;
