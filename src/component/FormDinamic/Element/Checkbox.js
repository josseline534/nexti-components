import React, { useContext } from "react";
//hooks
import { FormContext } from "../Hooks/FormContext";
//estilos
import "./elements.css";
function Checkbox({ field_id, field_label, field_value, section }) {
    const { handleChange } = useContext(FormContext);
    let classCheck = "form-check-input p-2";
    /*let classCheck =
        touched[field_id] && errors[field_id]
            ? "form-check-input p-2 is-in valid "
            : "form-check-input p-2";*/
    return (
        <div className='mb-3 form-check'>
            <input
                type='checkbox'
                className={classCheck}
                id={field_id}
                name={field_id}
                onChange={(event) => handleChange(field_id, section, event)}
                checked={field_value}
            />
            <label className='form-check-label labelInput' htmlFor={field_id}>
                {field_label}
            </label>
            {/* {touched[field_id] && errors[field_id] ? (
                <div id={field_id} className='form-text text-danger labelInput'>
                    {errors[field_id]}
                </div>
            ) : null} */}
        </div>
    );
}

export default Checkbox;
