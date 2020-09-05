import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import exampleSlice from 'state/example'
import colorSlice from 'state/color'

export const store = configureStore({
  reducer: {
    [exampleSlice.name]: exampleSlice.reducer,
    [colorSlice.name]: colorSlice.reducer
  }
})

export const actions = {
  [exampleSlice.name]: exampleSlice.actions,
  [colorSlice.name]: colorSlice.actions,
}

export type AppState = ReturnType<typeof store.getState>
export const useAppSelector: <TSelected>(
  selector: (state: AppState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
