import { Button } from "../../components";

const ComponentLibrary = () => {
  return (
    <>
      <div>
        <p className="w-full text-3xl bg-gray-800 text-blue-700 font-bold text-center">
          Component Library
        </p>
        <div className="flex p-7">
          <div className="grid grid-cols-4">
            <Button
              text="Primary Button"
              className="bg-blue-500 text-white p-2 m-2 rounded"
              onClick={() => alert("Primary Button Clicked")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentLibrary;
