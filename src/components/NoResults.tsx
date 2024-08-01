import * as React from "react";

const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-700 p-6">
      <div className="text-6xl mb-4 text-gray-400">🔍</div>
      <h1 className="text-2xl mb-2">No Results Found!</h1>
      <p className="text-lg text-gray-500">
        Try adjusting your search to find what you're looking for.
      </p>
    </div>
  );
};

export default NoResults;
