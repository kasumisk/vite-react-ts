import React from 'react';
import { RootState, Dispatch } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Todo = () => {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch<Dispatch>();
  const done = () => {
    dispatch.todo.done();
  };
  const reset = () => {
    dispatch.todo.reset();
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/layout/bus">Bus</Link>
        </li>
        <li>
          <Link to="/layout/cart/test">Cart</Link>
        </li>
      </ul>
      {todoState.map((o, index) => (
        <p key={index}>
          {o.todo}
          {o.done ? '完成' : '失败'}
        </p>
      ))}
      <button onClick={done}>done</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Todo;
