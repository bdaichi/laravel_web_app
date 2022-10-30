import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./pages/Example";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/example" element={<Example />} />
                <Route path="/" element={<Example />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
