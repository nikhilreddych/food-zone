import React from "react";
import ReactDOM  from "react-dom/client";

const Title = () => <h1 id="title">Food Zone</h1>;

const Heading = () => (
    <>
        <Title />
        <h2 id="heading">Hungry? Checkout food zone for all types of delicacies</h2>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);