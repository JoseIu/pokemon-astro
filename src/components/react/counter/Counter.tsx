import { useState } from 'react';
import './counter.css';

type Props = {
  initialCount: number;
};
export const Counter = ({ initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2 className="counter__title">Counter</h2>
      <h3 className="counter__value">Value:{count}</h3>

      <div className="counter__actions">
        <button className="counter__btn" onClick={() => setCount(prev => prev - 1)}>
          -1
        </button>
        <button className="counter__btn" onClick={() => setCount(prev => prev + 1)}>
          +1
        </button>
      </div>
    </div>
  );
};
