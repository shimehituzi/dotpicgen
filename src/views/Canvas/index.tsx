import React, { useCallback } from 'react'

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

  const dotStyle = useCallback(
    (dot: Color): React.CSSProperties => ({
      border: "none",
      float: "none",
      height: 25,
      width: 25,
      margin: -1,
      backgroundColor: dot
    }), []
  )

  return (
    <React.Fragment>
      { dots.map((row, y) => (
        <div key={y}>
          {
            row.map((dot, x) => (
              <div key={x} style={dotStyle(dot)} onClick={changeDotColor(y, x)}
              />
            ))
          }
        </div>
      )) }
    </React.Fragment>
  )
}

export default Canvas
