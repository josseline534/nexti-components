import React from "react";
import { Input, Select, Checkbox, Email } from "./Element/index";
function Element({
    field: {
        field_type,
        field_id,
        field_label,
        field_placeholder,
        field_value,
        field_options,
        field_help,
    },
    handleChange,
    handleBlur,
    values,
}) {
    switch (field_type) {
        case "email":
            return (
                <Email
                    handleChange={handleChange}
                    values={values}
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                    handleBlur={handleBlur}
                />
            );
        case "text":
            return (
                <Input
                    handleChange={handleChange}
                    values={values}
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                    handleBlur={handleBlur}
                />
            );
        case "select":
            return (
                <Select
                    handleChange={handleChange}
                    values={values}
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    field_options={field_options}
                    handleBlur={handleBlur}
                />
            );
        case "checkbox":
            return (
                <Checkbox
                    handleChange={handleChange}
                    values={values}
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    handleBlur={handleBlur}
                />
            );
        default:
            return null;
    }
}

export default Element;
