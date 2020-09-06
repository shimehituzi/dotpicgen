import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import colorSlice from 'state/color'
import testSlice from 'state/test'

export const store = configureStore({
  reducer: {
    [colorSlice.name]: colorSlice.reducer,
    [testSlice.name]: testSlice.reducer,
  }
})

export const actions = {
  [colorSlice.name]: colorSlice.actions,
  [testSlice.name]: testSlice.actions,
}

export type AppState = ReturnType<typeof store.getState>
export const useAppSelector: <TSelected>(
  selector: (state: AppState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
