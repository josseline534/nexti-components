import React, { useContext } from "react";
import { FormContext } from "../Hooks/FormContext";
//estilos
import "./elements.css";
function Select({ field_id, field_label, field_value, field_options }) {
    const { handleChange } = useContext(FormContext);
    return (
        <div className='mb-3'>
            <select
                defaultValue={"DEFAULT"}
                className='form-select p-2'
                onChange={(event) => handleChange(field_id, event)}
            >
                <option value={"DEFAULT"} disabled>
                    {field_label}
                </option>
                {field_options.map((option, i) => (
                    <option key={i} value={option.option_label}>
                        {option.option_label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
