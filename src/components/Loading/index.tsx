import React from "react";
import { PuffLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <PuffLoader size={100} color="#329a9a" />
    </div>
  );
}
