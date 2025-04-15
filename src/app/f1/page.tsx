import React from "react";
import Link from "next/link";

function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2">F2</Link>
        <Link href="/f3">F3</Link>
      </div>
    </>
  );
}

export default F1;
