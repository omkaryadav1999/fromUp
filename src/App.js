import React, { useState } from "react";
// import Exam from "./Exam"
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import DisplayData from "./component/DisplayData";
import { ToastContainer } from "react-toastify"
function App() {
    const [data, setData] = useState("");

    const getData = (e) => {
        setData(e.target.value);
    }

    return (
        <>
            <h1>select the form</h1>
            <label htmlFor="selectform">selectform:</label>&nbsp;&nbsp;
            <select value={data} onChange={getData}>
                <option>selectForm</option>
                <option>personal</option>
                <option>bussiness</option>
            </select><br /><br /><br />
            <ToastContainer></ToastContainer>
            {data ? <Home /> : ""}
        </>
    )
}

export default App