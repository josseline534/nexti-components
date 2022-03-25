import React, { useState, useEffect } from "react";
//components
import FormDynamic from "../component/FormDinamic/FormDynamic";
//formElement
import formElement from "./formElement";
function Page3() {
    const [elements, setElements] = useState(formElement);
    useEffect(() => {
        setElements(formElement[2]);
    }, [formElement]);
    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <FormDynamic formElement={elements} />
                </div>
            </div>
        </div>
    );
}

export default Page3;
