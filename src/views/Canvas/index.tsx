import React, { useCallback, CSSProperties } from 'react'
import { Card, CardContent, colors } from '@material-ui/core'

import { useAppSelector, useAppDispatch, actions, AppState } from 'state'


type Color = AppState['color']['pulletColor']

const Canvas: React.FC = () => {
  const dots = useAppSelector(state => state.canvas.dots)
  const color = useAppSelector(state => state.color.pulletColor)

  const dispatch = useAppDispatch()
  const changeDotColor = useCallback(
    (y: number, x: number) => () => {
      dispatch(actions.canvas.changeDotColor({y, x, color}))
    }, [dispatch, color]
  )

  const rowStyle: CSSProperties = {
    clear: "both",
    display: "table",
  }

  const dotStyle = useCallback(
    (dot: Color): React.CSSProperties => ({
      border: "none",
      float: "left",
      height: 25,
      width: 25,
      margin: -1,
      backgroundColor: dot
    }), []
  )

  const cardStyle: CSSProperties = {
    backgroundColor: colors.grey[300],
    paddingBottom: 16
  }

  return (
    <Card>
      <CardContent style={cardStyle}>
        { dots.map((row, y) => (
          <div key={y} style={rowStyle}>
            {
              row.map((dot, x) => (
                <div key={x} style={dotStyle(dot)} onClick={changeDotColor(y, x)} />
              ))
            }
          </div>
        )) }
      </CardContent>
    </Card>
  )
}

export default Canvas
