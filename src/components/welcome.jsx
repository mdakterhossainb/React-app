import React from "react";

const welcome = () => {
    let mark = false;
    return <div>{mark ? <h1>a+</h1> : <h1>a-</h1>}</div>;
};

export default welcome;
