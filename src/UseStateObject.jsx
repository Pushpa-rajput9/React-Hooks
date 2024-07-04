import React, { useState } from "react";

function UseStateObject() {
  const [name, setname] = useState({ Name: "Vinod", age: 27, degree: "MCA" });
  const update = () => {
    // setname({ Name: "Aman", age: 20, degree: "BCA" });
    setname({ ...name, Name: "Aman" }); // to change a particular value of object ... is a spread operator which bring other key-values
  };
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-14 text-blue-900 ">UseState with object</h1>
      <div className="flex justify-center items-center text-xl mb-4 p-5 h-16 rounded-full bg-red-200 ">
        {" "}
        Name : {name.Name} & Age : {name.age} & Degree : {name.degree}
      </div>
      <button className=" bg-slate-400 h-14 w-24 rounded-lg" onClick={update}>
        Update
      </button>
    </div>
  );
}

export default UseStateObject;
