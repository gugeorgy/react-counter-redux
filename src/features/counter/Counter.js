import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Counter.module.scss';
import {
  addAmount,
  decrement,
  increment,
  reset,
  selectCount,
} from './counterSlice';

const Counter = () => {
  // let's create our temporary state `amount` to add to our counter
  const [amount, setAmount] = React.useState(0);
  // let's select our state `counter` from the store
  const counter = useSelector(selectCount);
  // let's create the `dispatch` function
  const dispatch = useDispatch();
  //

  let content = (
    <section className={style.counter}>
      <h1 className={style.title}>
        Counter
        <br /> App
      </h1>
      <div className={style.img}>
        <span>🕐</span>
      </div>

      <div className={style.content}>
        <button className={style.btn} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={style.value}>{counter}</span>
        <button className={style.btn} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      <div className={style.actions}>
        <input
          className={style.amount}
          type='text'
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value ? e.target.value.at(-1) : e.target.value);
          }}
          onBlur={() => {
            !amount && setAmount(0);
          }}
        />
        <button onClick={() => dispatch(addAmount(amount))}>
          Add
          <br />
          Amount
        </button>
        <button className={style.asyncButton}>
          Add
          <br />
          Async
        </button>
        <button
          className={style.asyncButton}
          onClick={() => setTimeout(() => dispatch(reset()), 2000)}
        >
          Reset
        </button>
      </div>
    </section>
  );
  return content;
};

export default Counter;
