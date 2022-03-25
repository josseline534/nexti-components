import React from "react";

function Number({
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_help,
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
}) {
    let classInput =
        touched[field_id] && errors[field_id]
            ? "form-control p-2 is-invalid "
            : "form-control p-2";
    return (
        <div className='mb-3'>
            <label htmlFor={field_id} className='form-label labelInput'>
                {field_label}
            </label>
            <input
                type='number'
                className={classInput}
                id={field_id}
                name={field_id}
                aria-describedby='emailHelp'
                placeholder={field_placeholder}
                value={values[field_value]}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <div id={field_id} className='form-text text-success labelInput'>
                {field_help}
            </div>
            {touched[field_id] && errors[field_id] ? (
                <div id={field_id} className='form-text text-danger labelInput'>
                    {errors[field_id]}
                </div>
            ) : null}
        </div>
    );
}

export default Number;
