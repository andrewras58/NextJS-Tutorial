import React from 'react'

async function Reviews({
  params
}: {
  params: Promise<{productId:string}>
}) {
  const {productId} = await params;
  return (
    <>
      <h1>Reviews for Product {productId}</h1>
      <ol>
        <li>{productId} is so cool!</li>
        <li>I used {productId} and it was great!</li>
      </ol>
    </>
  )
}

export default Reviews