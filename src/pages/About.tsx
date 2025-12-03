import { Link } from 'react-router'
import { CenterHorizontal } from '../components'

const About = () => {
  return (
    <>
      <CenterHorizontal>
        <h1 className="text-green-500 text-3xl underline font-bold">test</h1>
      </CenterHorizontal>
      <div className="flex flex-col justify-center items-center min-w-dvh min-h-dvh">
        <Link to={'/'}>Home</Link>
      </div>
    </>
  )
}

export default About
