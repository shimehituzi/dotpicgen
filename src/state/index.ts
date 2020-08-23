import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import exampleSlice from 'state/example'

export const store = configureStore({
  reducer: {
    [exampleSlice.name]: exampleSlice.reducer,
  }
})

export const actions = {
  [exampleSlice.name]: exampleSlice.actions,
}

export type AppState = ReturnType<typeof store.getState>
export const useAppSelector: <TSelected>(
  selector: (state: AppState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => TSelected = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
