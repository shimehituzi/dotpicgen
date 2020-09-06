import React, { useCallback } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { Brightness1 } from '@material-ui/icons'

import { useAppSelector, useAppDispatch, actions } from 'state'
import { Colors } from 'state/color'

const ColorPullet: React.FC = () => {
  const color = useAppSelector(state => state.color)

  const dispatch = useAppDispatch()
  const changeColor = useCallback(
    (_:React.MouseEvent<HTMLElement, MouseEvent>, color: Colors) => {
      dispatch(actions.color.setColor(color))
      console.log("clicked")
    }, [dispatch]
  )

  return (
    <ToggleButtonGroup size="small" value={color.pulletColor} exclusive onChange={changeColor}>
      <ToggleButton value={Colors.Gray}><Brightness1 style={{color: Colors.Gray}}/></ToggleButton>
      <ToggleButton value={Colors.Red}><Brightness1 style={{color: Colors.Red}}/></ToggleButton>
      <ToggleButton value={Colors.Blue}><Brightness1 style={{color: Colors.Blue}}/></ToggleButton>
      <ToggleButton value={Colors.Green}><Brightness1 style={{color: Colors.Green}}/></ToggleButton>
      <ToggleButton value={Colors.Yellow}><Brightness1 style={{color: Colors.Yellow}}/></ToggleButton>
      <ToggleButton value={Colors.White}><Brightness1 style={{color: Colors.White}}/></ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ColorPullet
