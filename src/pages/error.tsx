import React, { useEffect } from "react";
import EmptyState from "../components/EmptyState";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyState 
  title="uh oh"
  subtitle="Something went wrong!"
  />;
}
