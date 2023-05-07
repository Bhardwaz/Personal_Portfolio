import Header from "./components/Layout/Header";
import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'))

const AppLayout = () => {
    return(
        <Header />
    )
}
root.render(<AppLayout />)