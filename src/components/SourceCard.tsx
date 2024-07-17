import * as React from "react";
import { CitationProps } from "@yext/search-ui-react";

const SourceCard = (props: CitationProps) => {
  const link = props.searchResult?.rawData?.c_file?.url;
  const name = props.searchResult?.name;

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-slate-100 flex flex-col grow-0 shrink-0 basis-64 text-sm text-neutral overflow-x-auto cursor-pointer hover:border-indigo-500">
      <a href={link}>{name}</a>
    </div>
  );
};

export default SourceCard;
