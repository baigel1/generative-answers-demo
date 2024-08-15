import * as React from "react";

import { useSearchState } from "@yext/search-headless-react";

import GenerativeAnswer from "./GenerativeAnswer";
import NoResults from "./NoResults";
import { VerticalResults, StandardCard } from "@yext/search-ui-react";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
  const verticalResults = useSearchState((state) => state.vertical.results);
  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
  );

  return (
    <>
      <GenerativeAnswer />
      {verticalResults && verticalResults.length > 0 ? (
        <VerticalResults
          CardComponent={SearchResultCard}
          displayAllOnNoResults={false}
        />

      ) : mostRecentSearch ? (
        <NoResults />
      ) : null}
    </>
  );
};

export default SearchResults;
