import React from "react";

const loading = () => {
  return (
    <div className="container mx-auto flex min-h-75 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-[#CCFF00]"></span>

        <p className="text-sm text-gray-400 font-medium">Loading workout details...</p>
      </div>
    </div>
  );
};

export default loading;
