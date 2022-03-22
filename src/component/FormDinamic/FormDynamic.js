import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./Hooks/FormContext";
//components
import Element from "./Element";

function FormDynamic({ formElement }) {
    const [elements, setElements] = useState(formElement);
    useEffect(() => {
        setElements(formElement);
    }, [formElement]);

    const { fields, page_label } = elements;

    const handleChange = (id, event) => {
        const newElements = { ...elements };
        newElements.fields.forEach((field) => {
            if (id === field.field_id) {
                if (field.field_type === "checkbox")
                    field.field_value = event.target.checked;
                else field.field_value = event.target.value;
            }
            setElements(newElements);
        });
    };

    return (
        <FormContext.Provider value={{ handleChange }}>
            <div>
                <p className='h6'>{page_label}</p>
                <form>
                    {fields
                        ? fields.map((field, i) => (
                              <Element key={i} field={field} />
                          ))
                        : null}
                </form>
            </div>
        </FormContext.Provider>
    );
}

export default FormDynamic;
