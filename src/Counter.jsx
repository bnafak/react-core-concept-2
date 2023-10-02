import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div className="border-8 text-center mb-7 mx-96 ">
        <h3 className="text-4xl my-15">Counter {count}</h3>
        <button className="text-4xl mr-10 text-center" onClick={handleAdd}>
          ADD
        </button>
       
        <button className="text-4xl text-center" onClick={handleReduce}>
          REDUCE
        </button>
      </div>
  );
}
