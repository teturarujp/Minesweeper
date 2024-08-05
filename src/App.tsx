// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Board } from './components/Board.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap justify-center h-screen py-40 bg-gray-600">
        <div className="grid grid-cols-5 gap-1 w-fit h-fit">
          <Board />
        </div>
      </div>
    </>
  )
}

export default App
