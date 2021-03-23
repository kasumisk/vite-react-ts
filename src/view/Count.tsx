import React from 'react'
import { RootState, Dispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './css/count.module.less';

const Count = () => {
    const countState = useSelector((state: RootState) => state.count)
    const dispatch = useDispatch<Dispatch>()
    const loadingState = useSelector((state:RootState) => state.loading)
    console.log(loadingState)
    console.log(countState)
    console.log(dispatch)
    const increment = () => {
      dispatch.count.increment(1)
    }
    const incrementAsync = () => {
      dispatch.count.incrementAsync(1)
    }
    return (
      <div className={styles.container}>
        The count is {countState.count}
        <button onClick={increment}>increment</button>
        <button onClick={incrementAsync}>incrementAsync</button>
      </div>
    )
}

export default Count;