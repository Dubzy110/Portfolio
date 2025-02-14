import { Link } from "react-router";

import { CenterHorizontal } from "./components/CenterHorizontal";

function App() {
  return (
    <>
      <CenterHorizontal>
        <h1 className="mt-3 text-3xl font-bold underline text-red-300">
          Hello World!
        </h1>
      </CenterHorizontal>
      <div className="flex flex-col min-h-screen min-w-screen justify-center items-center">
        <div>
          <button className="" onClick={() => console.log("clicked")}>
            X
          </button>
        </div>
        <div>
          <Link to={"./About"}>About</Link>
        </div>
      </div>
    </>
  );
}

export default App;
