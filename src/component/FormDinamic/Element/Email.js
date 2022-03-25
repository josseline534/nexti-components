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
    field_required,
    section,
}) {
    let classEmail = "form-control p-2";
    /* let classEmail =
        touched[field_id] && errors[field_id]
            ? "form-control p-2 is-invalid "
            : "form-control p-2"; */

    const { handleChange } = useContext(FormContext);
    return (
        <div className='mb-3 '>
            <label htmlFor={field_id} className='form-label labelInput'>
                {field_label}
            </label>
            <input
                type='email'
                className={classEmail}
                id={field_id}
                name={field_id}
                aria-describedby='emailHelp'
                placeholder={field_placeholder}
                value={field_value}
                onChange={(event) => handleChange(field_id, section, event)}
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

export default Email;
