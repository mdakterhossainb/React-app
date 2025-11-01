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
