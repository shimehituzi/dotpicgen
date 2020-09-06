import React, { useCallback } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'

import { useAppSelector, useAppDispatch, actions, AppState } from 'state'

type ABC = AppState['test']['abc']

const Test: React.FC = () => {
  const abc = useAppSelector(state => state.test.abc)

  const dispatch = useAppDispatch()
  const onChange = useCallback(
    (_: React.MouseEvent<HTMLElement, MouseEvent>, newState: ABC) => {
      console.log(newState)
      dispatch(actions.test.changeABC(newState))
    }, [dispatch]
  )

  return (
    <ToggleButtonGroup value={abc} exclusive onChange={onChange}>
      <ToggleButton value="a">a</ToggleButton>
      <ToggleButton value="b">b</ToggleButton>
      <ToggleButton value="c">c</ToggleButton>
    </ToggleButtonGroup>
  )
}
 
export default Test
