import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";

import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  GenerativeDirectAnswer,
} from "@yext/search-ui-react";

import BookCard from "../components/BookCard";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Harry Potter Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const config: HeadlessConfig = {
  apiKey: "5472b483d43f25c6dd83c68bb313900f",
  experienceKey: "book-search",
  locale: "en",
  verticalKey: "books",
};

const searcher = provideHeadless(config);

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar />
          <GenerativeDirectAnswer customCssClasses={{ container: "my-4" }} />
          <VerticalResults
            CardComponent={BookCard}
            displayAllOnNoResults={false}
          />
        </div>
      </div>
    </SearchHeadlessProvider>
  );
};

export default Search;
