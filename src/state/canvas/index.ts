import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Colors } from 'state/color'


type Dots = Array<Array<Colors>>

type Canvas = {
  row: number
  col: number
  dots: Dots
}

const initialState: Canvas = {
  row: 6,
  col: 6,
  dots: Array(3).fill(Array(3).fill(Colors.White))
  // get dots() {
  //   return Array(this.row).fill(Array(this.col).fill(Colors.White))
  // }
}

const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    changeDotColor: (state, action: PayloadAction<{y:number, x:number, color:Colors}>) => {
      state.dots[action.payload.y][action.payload.x] = action.payload.color
    }
  }
})

export default canvasSlice
