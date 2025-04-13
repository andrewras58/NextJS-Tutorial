import React from 'react'
import Counter from './counter'

export const metadata = {
  title: "Counter"
}

// when we have a compoenent that uses hooks (like useState or useEffect) we need to wrap them in a server side
//    component in order to give the page metadata (since it doesn't work on client side components)
function CounterPage() {
  return (
    <Counter />
  )
}

export default CounterPage