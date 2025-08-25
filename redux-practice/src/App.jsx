import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex w-full justify-center  bg-amber-300'>
      <h1>Heyy</h1>
      <button onClick={()=> setCount(count+1)}>INC {count}</button> 
    </div>
      
    </>
  )
}

export default App
