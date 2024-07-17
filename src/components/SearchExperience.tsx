import * as React from "react";

import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
} from "@yext/search-headless-react";

import App from "./App";

const config: HeadlessConfig = {
  apiKey: "5472b483d43f25c6dd83c68bb313900f",
  experienceKey: "book-search",
  locale: "en",
  verticalKey: "books",
};
const searcher = provideHeadless(config);

const SearchExperience = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  );
};

export default SearchExperience;
