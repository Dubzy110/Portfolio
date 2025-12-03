import type { Cell } from '../../Types'

import { makeNewCell } from '../cell'
import { placeMines } from './placeMines'

type MakeNewGrid = (cellTotal: number) => Cell[]

export const MakeNewGrid: MakeNewGrid = (cellTotal: number) =>
  placeMines(
    [...Array(cellTotal)].map((_, i) => makeNewCell(i)),
    cellTotal,
  )
