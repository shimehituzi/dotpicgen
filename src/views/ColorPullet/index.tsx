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
    <ToggleButtonGroup size="large" value={color.pulletColor} exclusive onChange={changeColor}>
      <ColorButton value={Colors.Gray}/>
      <ColorButton value={Colors.Red}/>
      <ColorButton value={Colors.Blue}/>
      <ColorButton value={Colors.Green}/>
      <ColorButton value={Colors.Yellow}/>
      <ColorButton value={Colors.White}/>
    </ToggleButtonGroup>
  )
}

const ColorButton: React.FC<{value: Colors}> = ({value}) => {
  return (
    <ToggleButton value={value} >
      <Brightness1 style={{color: value}}/>
    </ToggleButton>
  )
}

export default ColorPullet
