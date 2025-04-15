import React from 'react'

// (.) to match segments on the same level for intercepting routes
// (..) to match one level above (both are just like in file structures)
// (..)(..) to match two levels above (same as ../../ in files)
// (...) to match starting from the app directory

function F5() {
  return (
    <h1>(...) Intercepted F5 Page</h1>
  )
}

export default F5