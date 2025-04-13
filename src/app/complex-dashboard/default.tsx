import React from 'react'

// When navigating through the UI (like clicking links) Next.js keeps showing whatever was in the unmatched slots before

// But when the page reloads Next.js will look for 'default.tsx' for each unmatched slot, which is a fallback for when
//      the slot does not have a matching active state associated with the current URL, resulting in a 404

// This is the fallback view for the @children slot

function ComplexDashBoardDefaultPage() {
  return (
    <h1>Complex dashboard</h1>
  )
}

export default ComplexDashBoardDefaultPage