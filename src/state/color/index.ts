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
  pulletColor: Colors
}

const initialState: Color = {
  pulletColor: Colors.Gray
}

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    reset: () => initialState,
    setColor: (state, action: PayloadAction<Colors>) => {
      state.pulletColor = action.payload
    }
  }
})

export default colorSlice
