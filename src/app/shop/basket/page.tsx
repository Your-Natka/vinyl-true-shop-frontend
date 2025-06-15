import React from "react";

interface basketProps {
    children?: React.ReactNode;
}

const Basket = ({children} : basketProps ) => {

    return (
        <div>
            <h1>Basket Page</h1>
            {children}
        </div>
    );
};

export default Basket;

