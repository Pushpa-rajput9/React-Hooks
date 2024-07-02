import React, { useState } from "react";

function UsestateArray() {
  const biodata = [
    {
      id: 0,
      name: "vinod",
      age: 22,
    },
    {
      id: 1,
      name: "Aman",
      age: 25,
    },
  ];
  const [myArray, setmyArray] = useState(biodata);
  const clearArray = () => {
    setmyArray([]);
  };
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-14 text-blue-900 ">UseState with array</h1>
      {myArray.map((data) => (
        <div
          className="flex justify-center items-center text-xl mb-4 w-80 h-16 rounded-full bg-red-200 "
          key={data.id}
        >
          Name : {data.name} & Age : {data.age}
        </div>
      ))}
      <button
        className=" bg-slate-400 h-14 w-24 rounded-lg"
        onClick={clearArray}
      >
        Clear
      </button>
    </div>
  );
}

export default UsestateArray;
