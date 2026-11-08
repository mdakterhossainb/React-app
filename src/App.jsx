import React, {useRef} from "react";

const App = () => {
    let head = useRef();
    function change(params) {
        head.current.innerHTML =
            "<h1><ul><li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> <li>AAAAAAAA</li> </ul> </h1> allah allah allah allah SUBHANALLAH";
    }
    return (
        <div>
            <h1 ref={head}>alhamdulillah</h1>
            <button onClick={change}>click</button>
        </div>
    );
};

export default App;


//22222222222222222222222222222
import "./App.css";
import { useState, useEffect } from "react";
import Singledata from "./components/SinglefakeData/Singledata";

function App() {
  const [fakeData, setfakedata] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((mydat) => setfakedata(mydat));
  });
  return (
    <div>
      {fakeData.map((singledata) => (
        <Singledata key={singledata} {...singledata}></Singledata>
      ))}
    </div>
  );
}
export default App;
