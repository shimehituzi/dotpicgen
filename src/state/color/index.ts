import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Colors {
  Gray = '#616161',
  Red = '#ff8a80',
  Blue = '#82b1ff',
  Green = '#b9f6ca',
  Yellow = '#ffff8d',
  White = '#f5f5f5',
}

type Color = {
  color: Colors
}

const initialState: Color = {
  color: Colors.White
}

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    reset: () => initialState,
    setColor: (state, action: PayloadAction<Colors>) => {
      state.color = action.payload
    }
  }
})

export default colorSlice
