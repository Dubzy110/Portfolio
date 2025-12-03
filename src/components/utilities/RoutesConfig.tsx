import About from '../../pages/About'
import Home from '../../pages/Home'
import Minesweeper from '../../pages/Minesweeper'

export const routeConfig = [
  {
    name: 'Home',
    to: '/',
    element: <Home />,
  },
  {
    name: 'About',
    to: '/About',
    element: <About />,
  },
  {
    name: 'Minesweeper',
    to: '/Minesweeper',
    element: <Minesweeper />,
  },
]
