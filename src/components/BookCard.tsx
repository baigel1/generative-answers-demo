import * as React from "react";
import { CardProps } from "@yext/search-ui-react";
// import { Books } from "../types/books";

const BookCard = ({ result }: CardProps<any>): JSX.Element => {
  return (
    <div
      key={result.rawData.uid}
      className="mb-4 justify-between rounded-lg border bg-zinc-100 p-4 text-stone-900 shadow-sm flex flex-col gap-4"
    >
      <div>{result.index}</div>
      <div className="font-bold">{result.rawData.name}</div>
      <div>{result.segment?.text}</div>
      <div className="italic self-end">Score: {result.segment?.score}</div>
    </div>
  );
};

export default BookCard;
