import { unstable_ViewTransition as ViewTransition } from "react";
import { useState, useTransition } from "react";
import guitarImage from "./assets/Guitar.jpg";

const positions = [
  "translate(0, 0) rotate(0deg)",
  "translate(100%, 0) rotate(90deg)",
  "translate(0, 100%) rotate(270deg)",
  "translate(100%, 100%) rotate(360deg)",
];

const App = () => {
  const [position, setPosition] = useState(0);

  const [_isPending, startTransition] = useTransition();

  return (
    <>
      <div
        className="w-dvw h-screen bg-black border-2"
        onClick={() =>
          startTransition(() => setPosition((position + 1) % positions.length))
        }
      >
        <ViewTransition name="guitar">
          <img
            src={guitarImage}
            alt="guitar"
            className="absolute w-1/3 aspect-square select-none"
            style={{
              transform: positions[position],
            }}
          />
        </ViewTransition>
      </div>
    </>
  );
};

export default App;
