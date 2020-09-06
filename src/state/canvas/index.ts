import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Colors } from 'state/color'


type Dots = Array<Array<Colors>>

type Canvas = {
  row: number
  col: number
  dots: Dots
}

const initialState: Canvas = {
  row: 0,
  col: 0,
  dots: [
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
    [Colors.Red, Colors.Blue, Colors.Red, Colors.Gray],
  ]
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
