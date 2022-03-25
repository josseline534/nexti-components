import React, { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";
//estilos
import "./elements.css";
function Input({
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_help,
    section,
    /* register, */
}) {
    let classInput = "form-control p-2";
    /* const { handleChange } = useContext(FormContext); */
    /* let classInput =
        touched[field_id] && errors[field_id]
            ? "form-control p-2 is-invalid "
            : "form-control p-2"; */

    const { handleChange } = useContext(FormContext);

    return (
        <div className='mb-3'>
            <label htmlFor={field_id} className='form-label labelInput'>
                {field_label}
            </label>
            <input
                type='text'
                className={classInput}
                id={field_id}
                name={field_id}
                aria-describedby='emailHelp'
                placeholder={field_placeholder}
                value={field_value}
                onChange={(event) => handleChange(field_id, section, event)}
                /* {...register(field_id + "", { required: "campo requerido" })} */
            />
            <div id={field_id} className='form-text text-success labelInput'>
                {field_help}
            </div>
            {/* {touched[field_id] && errors[field_id] ? (
                <div id={field_id} className='form-text text-danger labelInput'>
                    {errors[field_id]}
                </div>
            ) : null} */}
        </div>
    );
}

export default Input;
