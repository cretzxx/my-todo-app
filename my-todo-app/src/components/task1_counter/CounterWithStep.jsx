import { useState } from 'react';

export default function CounterWithStep() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => (prev - step >= 0 ? prev - step : 0));

  const color = count >= 50 ? 'red' : 'black';

  return (
    <div className="counter-card">
      <h2>Лічильник із кроком</h2>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color }}>{count}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <label>Крок: </label>
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} min="1" />
      </div>
      <p>{count >= 50 && "🔥 Досягнуто 50! (червоний колір)"}</p>
    </div>
  );
}