import { useState } from "react";

function App() {
  //useState return [] an array + function() ,we can re-set the current value of usestate
  const [state, setstate] = useState(
    "To change my state click on button🤌🤌🤌"
  );

  const change = () => {
    // change state one time only

    //setstate("Dekha na mai badal gya😂😂😂😂🤣 its so easy and simple");

    // ********************* toggle means change state one to 2nd and 2nd to one
    let val = state;
    // if (val === "To change my state click on button🤌🤌🤌") {
    //   setstate("Dekha na mai badal gya😂😂😂😂🤣 its so easy and simple");
    // } else {
    //   setstate("To change my state click on button🤌🤌🤌");
    // }

    //or

    val === "To change my state click on button🤌🤌🤌"
      ? setstate("Dekha na mai badal gya😂😂😂😂🤣 its so easy and simple")
      : setstate("To change my state click on button🤌🤌🤌");
  };
  return (
    <div className=" h-full w-full flex items-center justify-center ">
      <div className=" w-full h-full pt-96 flex flex-col items-center justify-center  ">
        <div className=" w-fit h-fit text-3xl mb-5 text-blue-900 ">{state}</div>
        <button
          onClick={change}
          className=" h-14 w-32 bg-slate-800 text-white rounded-2xl"
        >
          Click on me
        </button>
      </div>
    </div>
  );
}

export default App;
