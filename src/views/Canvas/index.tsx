import React, { useCallback } from 'react'

import { useAppSelector, useAppDispatch, actions } from 'state'
import './dot.css'

const Canvas: React.FC = () => {
  const dots = useAppSelector(state => state.canvas.dots)
  const color = useAppSelector(state => state.color.pulletColor)

  const dispatch = useAppDispatch()
  const changeDotColor = useCallback(
    (y: number, x: number) => () => {
      dispatch(actions.canvas.changeDotColor({y, x, color}))
    }, [dispatch, color]
  )

  return (
    <React.Fragment>
      { dots.map((row, y) => (
        <div key={y} className='canvas-row'>
          {
            row.map((dot, x) => (
              <div
                key={x}
                className='dot'
                style={{backgroundColor: dot}}
                onClick={changeDotColor(y, x)}
              />
            ))
          }
        </div>
      )) }
    </React.Fragment>
  )
}

export default Canvas
