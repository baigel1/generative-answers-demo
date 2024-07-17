import * as React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useSearchState } from "@yext/search-headless-react";
import { GenerativeDirectAnswer } from "@yext/search-ui-react";
import SourceCard from "./SourceCard";

const GenerativeAnswer = () => {
  const gdaLoading = useSearchState(
    (state) => state.generativeDirectAnswer.isLoading
  );
  return (
    <>
      <div className="my-4">{gdaLoading && <Skeleton count={5} />}</div>
      <GenerativeDirectAnswer
        CitationCard={SourceCard}
        customCssClasses={{ container: "my-4" }}
      />
    </>
  );
};

export default GenerativeAnswer;
