import * as React from "react";
import { SearchBar } from "@yext/search-ui-react";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="mx-auto flex max-w-5xl flex-col my-4">
      <SearchBar placeholder="Ask me a question about Harry Potter" />
      <SearchResults />
    </div>
  );
};

export default App;
