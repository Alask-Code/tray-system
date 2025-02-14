import { useLayoutEffect, useState } from "react";
import "./App.css";
import { CpuInfo } from "os";

function App() {
  const [count, setCount] = useState(0);
  const [model, setModel] = useState("No Model Provided");

  useLayoutEffect(() => {
    window.api.on("main-process-message", (_event, cpu: CpuInfo) => {
      setModel(cpu.model);
    });
  });
  return (
    <div className="bg-red-400 w-screen h-screen flex flex-col items-center justify-center">
      <p>{model}</p>
      <button
        className="bg-blue-100 p-2 px-4 rounded-xl"
        onClick={() => setCount(count + 1)}
      >
        Counter on: {count}
      </button>
    </div>
  );
}

export default App;
