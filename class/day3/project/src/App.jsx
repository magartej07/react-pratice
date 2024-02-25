import { useState } from 'react'
import Inline from './Components/Inline'
import Cssimport from './Components/Cssimport/Cssimport'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inline/> */}

      <Cssimport/>
    </>
  )
}

export default App
