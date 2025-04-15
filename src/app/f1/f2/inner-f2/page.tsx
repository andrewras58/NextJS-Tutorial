import React from "react";
import Link from "next/link";

function F2() {
  return (
    <h1>
      Inner F2 Page <Link href="/f5">F5</Link>
    </h1>
  );
}

export default F2;
