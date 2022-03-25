import React, { useState, useEffect } from "react";
//components
import FormDynamic from "../component/FormDinamic/FormDynamic";
//formElement
import formElement from "./formElement";
function Page2() {
    const [elements, setElements] = useState(formElement);
    useEffect(() => {
        setElements(formElement[1]);
    }, [formElement]);

    /* const handleSubmit = (data) => console.log(data); */
    const handleSubmitForm = (data) => {
        /* event.preventDefault(); */
        console.log(data);
    };
    const handleChange = (id, section, event) => {
        const newElements = [...elements];
        newElements[section].fields.forEach((field) => {
            const { field_type, field_id, field_value } = field;
            if (id === field_id) {
                switch (field_type) {
                    case "text":
                        field.field_value = event.target.value;
                        break;
                    case "checkbox":
                        field.field_value = event.target.checked;
                        break;
                    default:
                        break;
                }
            }
        });
        setElements(newElements);
        /* console.log(newElements);
         */
    };

    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                    <FormDynamic
                        formElement={elements}
                        handleSubmitForm={handleSubmitForm}
                        handleChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page2;
