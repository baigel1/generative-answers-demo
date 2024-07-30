import * as React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResultsDisplay = ({ results }) => {
  return (
    <section className="flex flex-col">
      {results.map((result) => {
        return (
          <SearchResultCard
            key={`${result.id}-${result.index}`}
            result={result}
          />
        );
      })}
    </section>
  );
};

export default SearchResultsDisplay;
