import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // runs on mount and rerenders
  // useEffect(() => {
  //   console.log("App has Mounted");
  // });

  // runs only once on mount
  // useEffect(() => {
  //   console.log("useEffect() called!");
  // }, []);

  // runs on mount and every time state changes
  useEffect(() => {
    console.log("useEffect() called again!");
  }, [count2]);

  return (
    <div className="h-screen bg-blue-400 text-white">
      <h1>Welcome to the Application :)</h1>
    </div>
  );
}
