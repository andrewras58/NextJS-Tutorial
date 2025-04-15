import React from 'react'

// (.) to match segments on the same level for intercepting routes
// (..) to match one level above (both are just like in file structures)
// (..)(..) to match two levels above (same as ../../ in files)

function F4() {
  return (
    <h1>(..)(..) Intercepted F4 Page</h1>
  )
}

export default F4