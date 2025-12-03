import { Provider } from 'react-redux'
import { store } from '../../state'
import { Grid } from './components'

const minesweeper = () => {
  return (
    <div>
      <Provider store={store}>
        <p className="w-full text-3xl bg-gray-800 text-blue-700 font-bold text-center">
          MineSweeper
        </p>
        <div className="flex p-7">
          <Grid />
        </div>
      </Provider>
    </div>
  )
}

export default minesweeper
