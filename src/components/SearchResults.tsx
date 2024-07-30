import * as React from "react";

import { VerticalResults } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";

import BookCard from "./BookCard";
import GenerativeAnswer from "./GenerativeAnswer";
import SearchResultDisplay from "./SearchResultDisplay";

const SearchResults = () => {
  console.log("search results are");
  const verticalResults = useSearchState((state) => state.vertical.results);
  console.log(verticalResults);

  return (
    <>
      <GenerativeAnswer />
      {verticalResults && verticalResults.length > 0 &&
        <SearchResultDisplay results={verticalResults} />}
    </>
  );
};

export default SearchResults;
