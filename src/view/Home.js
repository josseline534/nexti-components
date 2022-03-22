import React, { useState, useEffect } from "react";
//components
import FormDynamic from "../component/FormDinamic/FormDynamic";
import Button from "../component/Button/Button";
//formElement
import formElement from "./formElement";

function Home() {
    const [elements, setElements] = useState(formElement[0]);
    const myStyle = {
        background: "#22D16B",
        color: "#1F3F4A",
    };

    useEffect(() => {
        setElements(formElement[0]);
    }, [formElement]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(elements);
    };
    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div className='col-md-4 offset-md-4'>
                    <FormDynamic formElement={elements} />
                </div>
                <div className='col-md-4 offset-md-4 '>
                    <Button
                        text={"Continuar"}
                        styles={myStyle}
                        action={(event) => handleSubmit(event)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
