import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";

function App() {
  return (
    <>
      <div className="border-8 w-full">
        <h1 className=" text-red-600 mb-10 text-7xl text-center">
          React Core Concept
        </h1>
        <Friends></Friends>
        <Counter></Counter>
        <Team></Team>
      </div>
    </>
  );
}

export default App;
