import { useState } from "react";
import { Link } from "react-router";
import { CenterHorizontal } from "./CenterHorizontal";

const Home = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <CenterHorizontal>
        <h1 className="mt-3 text-3xl font-bold underline text-red-300">
          Hello World!
        </h1>
      </CenterHorizontal>
      <div className="flex flex-col min-h-screen min-w-screen justify-center items-center">
        <div>
          <button
            className=""
            onClick={() => {
              console.log("clicked");
              setCounter((currentValue) => currentValue + 1);
            }}
          >
            {counter}
          </button>
        </div>
        <div>
          <Link to={"./About"}>About</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
