import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-12 h-12 border-4 border-primary-dark border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
