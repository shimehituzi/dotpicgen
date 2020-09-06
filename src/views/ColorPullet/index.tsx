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
    }, [dispatch]
  )

  return (
    <ToggleButtonGroup size="small" value={color.pulletColor} exclusive onChange={changeColor}>
      {
        Object.entries(Colors).map(([_, color], index) => {
          return (
            <ToggleButton key={index} value={color}>
              <Brightness1 style={{color: color}}/>
            </ToggleButton>
          )
        })
      }
    </ToggleButtonGroup>
  )
}

export default ColorPullet
