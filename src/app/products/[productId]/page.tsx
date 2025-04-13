import React from "react";

import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

// You can't use both static and dynamic metadata in the same route segment
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}

export default ProductDetails;
