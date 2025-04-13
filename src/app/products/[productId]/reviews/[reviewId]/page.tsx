import React from "react";
import { redirect } from "next/navigation";

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // const random = getRandomInt(2);
  // if (random === 1){
  //   throw new Error("error loading review");
  // }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
export default ProductReview;
