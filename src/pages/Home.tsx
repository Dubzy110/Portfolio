import { useState } from 'react'
import { Link } from 'react-router'
import { CenterHorizontal } from '../components'

const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <CenterHorizontal>
        <h1 className="mt-3 text-3xl font-bold underline text-red-300">
          Hello World!
        </h1>
      </CenterHorizontal>
      <div className="flex flex-col min-h-dvh min-w-dvh justify-center items-center">
        <div className="flex">
          <button
            type="button"
            className="mr-5 font-bold text-2xl"
            onClick={() => {
              console.log('clicked -')
              setCounter((currentValue) => currentValue - 1)
            }}
          >
            -
          </button>
          <div className="w-fit flex justify-center text-lg m-1">{counter}</div>
          <button
            type="button"
            className="ml-5 font-bold text-2xl"
            onClick={() => {
              console.log('clicked +')
              setCounter((currentValue) => currentValue + 1)
            }}
          >
            +
          </button>
        </div>
        <button
          type="reset"
          className="mb-5"
          onClick={() => {
            if (counter === 10) {
              console.log('woo')
            }
            console.log('Reset')
            setCounter(0)
          }}
        >
          Reset
        </button>
        <div>
          <Link to={'./About'}>About</Link>
        </div>
      </div>
    </>
  )
}

export default Home
