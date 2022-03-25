import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
//components
import Element from "./Element";
import Button from "../Button/Button";
//hooks
import { FormContext } from "./Hooks/FormContext";
//estilos
import "./formDynamic.css";

function FormDynamic({ formElement, handleSubmitForm, handleChange }) {
    const [elements, setElements] = useState(formElement);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const myStyle = {
        background: "#22D16B",
        color: "#1F3F4A",
    };

    useEffect(() => {
        setElements(formElement);
    }, [formElement]);

    return (
        <FormContext.Provider value={{ handleChange }}>
            <div className='containerForm'>
                {elements
                    ? elements.map(({ page_label, fields }, index) => (
                          <div key={index}>
                              <p className='h6 pt-4 ps-4 pageLabel'>
                                  {page_label}
                              </p>
                              <form
                                  /* onSubmit={handleSubmit(handleSubmitForm)} */
                                  className='row g-2 p-4'
                              >
                                  {fields
                                      ? fields.map((field, i) => (
                                            <div
                                                key={i}
                                                className={field.field_width}
                                            >
                                                <Element
                                                    field={field}
                                                    register={register}
                                                    section={index}
                                                />
                                            </div>
                                        ))
                                      : null}
                                  {index === elements.length - 1 ? (
                                      <div className='col-md-4 offset-md-8 p-4'>
                                          <Button
                                              typeButton={"submit"}
                                              text={"Continuar"}
                                              styles={myStyle}
                                              action={(event) =>
                                                  handleSubmit(event)
                                              }
                                          />
                                      </div>
                                  ) : null}
                              </form>
                          </div>
                      ))
                    : null}
            </div>
        </FormContext.Provider>
    );
}

export default FormDynamic;
