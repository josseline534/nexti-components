import React, { useState, useEffect } from "react";
import { FormContext } from "./Hooks/FormContext";
import { Formik } from "formik";
//components
import Element from "./Element";
import Button from "../Button/Button";

function FormDynamic({ formElement }) {
    const [elements, setElements] = useState(formElement);

    const myStyle = {
        background: "#22D16B",
        color: "#1F3F4A",
    };

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
                <Formik
                    initialValues={formElement.initialValues}
                    onSubmit={(valores) =>
                        console.log("Formulario Enviado", valores)
                    }
                >
                    {({ handleSubmit, handleBlur, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            {fields
                                ? fields.map((field, i) => (
                                      <Element
                                          key={i}
                                          field={field}
                                          values={values}
                                          handleChange={handleChange}
                                          handleBlur={handleBlur}
                                      />
                                  ))
                                : null}
                            <Button
                                typeButton={"submit"}
                                text={"Continuar"}
                                styles={myStyle}
                                action={() => {}}
                            />
                        </form>
                    )}
                </Formik>
            </div>
        </FormContext.Provider>
    );
}

export default FormDynamic;
