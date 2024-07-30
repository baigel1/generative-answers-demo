import * as React from "react";

const SearchResult = ({ result }) => {
  return (
    <div
      className="border-b border-gray-300 py-8 text-stone-900 flex-col scroll-mt-6"
      id={result.index}
    >
      <p className="mb-2 font-light italic">
        <span className="font-semibold not-italic">Segment: </span>
        {result.segment.text}
      </p>
      <div className="flex gap-1">
        <p className="font-semibold">Source:</p>
        <a
          className="hover:cursor-pointer hover:underline w-fit text-blue-600"
          href={result.rawData.c_file.url}
        >
          <div>{result.rawData.name}</div>
        </a>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold">Relevance Score:</p>
        <p className="font-light">{result.segment.score}</p>
      </div>
    </div>
  );
};

export default SearchResult;
