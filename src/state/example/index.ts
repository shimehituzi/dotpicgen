import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Example = {
  text: string
}

const initialState: Example = {
  text: ''
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    reset: () => initialState,
    setExample: (_, action: PayloadAction<Example>) => action.payload,
  }
})

export default exampleSlice
