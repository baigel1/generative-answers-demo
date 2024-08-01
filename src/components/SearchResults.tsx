import * as React from "react";

import { useSearchState } from "@yext/search-headless-react";

import GenerativeAnswer from "./GenerativeAnswer";
import SearchResultDisplay from "./SearchResultDisplay";
import NoResults from "./NoResults";

const SearchResults = () => {
  const verticalResults = useSearchState((state) => state.vertical.results);
  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
  );

  return (
    <>
      <GenerativeAnswer />
      {verticalResults && verticalResults.length > 0 ? (
        <SearchResultDisplay results={verticalResults} />
      ) : mostRecentSearch ? (
        <NoResults />
      ) : null}
    </>
  );
};

export default SearchResults;
