import React, { useCallback, useEffect } from 'react'

import { useAppSelector, useAppDispatch, actions } from 'state'

const Example: React.FC = () => {
  const example = useAppSelector(state => state.example)

  const dispatch = useAppDispatch()
  const changeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.example.setExample({
        text: e.target.value
      }))
    }, [dispatch]
  )

  useEffect(() => {
    return () => { dispatch(actions.example.reset()) }
  }, [dispatch])

  return (
    <React.Fragment>
      <input
        type='text'
        value={example.text}
        onChange={changeForm}
      />
    </React.Fragment>
  )
}

export default Example
