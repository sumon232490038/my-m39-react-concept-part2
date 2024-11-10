import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdding = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleAdding2 = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleAdding}>Add</button>
      <button onClick={handleAdding2}>Remove</button>
    </div>
  );
}
