"use client"

import { useState } from "react"





const Counter = () => {

    const [count, setCount] = useState<number>(0);

    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }

  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <button
          type="button"
          onClick={decrement}
          className="bg-black px-4 py-1 rounded-lg text-white font-bold tracking-wide"
        >
          Decrement
        </button>
        <h1 className="border-2 px-4">{count}</h1>
        <button
          type="button"
          onClick={increment}
          className="bg-black px-4 py-1 rounded-lg text-white font-bold tracking-wide"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter
