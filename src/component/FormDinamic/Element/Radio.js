import React from "react";
//estilos
import "./elements.css";
function Radio({ field_id, field_label, field_options }) {
    return (
        <div className='row g-3 pb-4'>
            <div className='col-md-9'>
                <label className='form-check-label labelInput'>
                    {field_label}
                </label>
            </div>
            {field_options
                ? field_options.map((option, i) => (
                      <div
                          key={i}
                          className='form-check form-check-inline col-md-1'
                      >
                          <input
                              className='form-check-input radio'
                              type='radio'
                              name={field_id}
                              id={option.option_id}
                              value={option.option_value}
                          />
                          <label
                              className='form-check-label'
                              htmlFor='{option.option_id}'
                          >
                              {option.option_label}
                          </label>
                      </div>
                  ))
                : null}
        </div>
    );
}

export default Radio;
