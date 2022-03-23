import React, { useContext } from "react";
//hooks
import { FormContext } from "../Hooks/FormContext";
//estilos
import "./elements.css";
function Checkbox({
    field_id,
    field_label,
    field_value,
    handleBlur,
    handleChange,
    values,
}) {
    /* const { handleChange } = useContext(FormContext); */
    return (
        <div className='mb-3 form-check'>
            <input
                type='checkbox'
                className='form-check-input p-2'
                id={field_id}
                name={field_id}
                onChange={handleChange}
                checked={values[field_value]}
                onBlur={handleBlur}
            />
            <label className='form-check-label labelInput' htmlFor={field_id}>
                {field_label}
            </label>
        </div>
    );
}

export default Checkbox;
