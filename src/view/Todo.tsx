import React from 'react'
import { RootState, Dispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const todoState = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch<Dispatch>()
    const loadingState = useSelector((state:RootState) => state.loading)
    console.log(loadingState)
    console.log(todoState)
    console.log(dispatch)
    const done = () => {
      dispatch.todo.done()
    }
    const reset = () => {
      dispatch.todo.reset()
    }
    return (
      <div>
        {todoState.map((o, index) =>(
          <p key={index}>{o.todo}{o.done ? '完成': '失败'}</p>
        ))}
        <button onClick={done}>done</button>
        <button onClick={reset}>reset</button>
      </div>
    )
}

export default Todo;