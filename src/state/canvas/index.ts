import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Colors } from 'state/color'


type Dots = Array<Array<Colors>>

type Canvas = {
  dots: Dots
}

const initialState: Canvas = {
  dots: Array(9).fill(Array(9).fill(Colors.White))
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
