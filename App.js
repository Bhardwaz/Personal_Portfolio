import Header from "./components/Layout/Header";
import React from "react";
import ReactDOM  from "react-dom/client";
import Body from "./components/Layout/Body";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <div className="w-full">
        <Header />
        <Body />
        </div>
    )
}
root.render(<AppLayout />)