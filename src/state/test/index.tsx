import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ABC = "a" | "b" | "c" | null

type Test = {
  abc: ABC
}

const initialState: Test = {
  abc: null
}

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeABC: (state, action: PayloadAction<Test['abc']>) => {
      state.abc = action.payload
    }
  }
})

export default testSlice
