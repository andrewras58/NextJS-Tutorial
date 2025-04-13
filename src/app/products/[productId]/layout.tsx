import React from 'react'

function getRandomInt(count: number): number {
  return Math.floor(Math.random() * count);
}

function ProductDetailsLayout({
  children
}: {
  children: React.ReactNode
}) {
  const random = getRandomInt(2);
  if (random === 1){
    throw new Error("error loading product");
  }
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  )
}

export default ProductDetailsLayout