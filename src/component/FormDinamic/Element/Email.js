import React, { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";
//estilos
import "./elements.css";
function Email({
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_help,
    handleBlur,
    values,
    handleChange,
}) {
    /* const { handleChange } = useContext(FormContext); */
    return (
        <div className='mb-3 '>
            <label htmlFor={field_id} className='form-label labelInput'>
                {field_label}
            </label>
            <input
                type='email'
                className='form-control p-2'
                id={field_id}
                name={field_id}
                aria-describedby='emailHelp'
                placeholder={field_placeholder}
                value={values[field_id]}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div id={field_id} className='form-text text-success labelInput'>
                {field_help}
            </div>
        </div>
    );
}

export default Email;
