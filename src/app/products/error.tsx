"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

// placement of this error.tsx file matters because it goes from bottom up to find the first error file to render
//    a higher placement of this file means "featured products" will disappear

// in order to handle an error from a layout this error file needs to be within the parent element

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  }
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;
