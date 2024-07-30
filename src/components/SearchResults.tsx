import * as React from "react";

import { useSearchState } from "@yext/search-headless-react";

import GenerativeAnswer from "./GenerativeAnswer";
import SearchResultDisplay from "./SearchResultDisplay";

const SearchResults = () => {
  const verticalResults = useSearchState((state) => state.vertical.results);

  return (
    <>
      <GenerativeAnswer />
      {verticalResults && verticalResults.length > 0 && (
        <SearchResultDisplay results={verticalResults} />
      )}
    </>
  );
};

export default SearchResults;
