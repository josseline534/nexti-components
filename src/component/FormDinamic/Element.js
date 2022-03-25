import React from "react";
import { Input, Select, Checkbox, Email, Number, Radio } from "./Element/index";
function Element({
    field: {
        field_type,
        field_id,
        field_label,
        field_placeholder,
        field_value,
        field_options,
        field_help,
        field_required,
    },
    register,
    section,
}) {
    switch (field_type) {
        case "email":
            return (
                <Email
                    field_required={field_required}
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                    register={register}
                    section={section}
                />
            );
        case "text":
            return (
                <Input
                    field_required={field_required}
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                    register={register}
                    section={section}
                />
            );
        case "number":
            return (
                <Number
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                />
            );
        case "select":
            return (
                <Select
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    field_options={field_options}
                />
            );
        case "checkbox":
            return (
                <Checkbox
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                    section={section}
                />
            );
        case "radio":
            return (
                <Radio
                    field_id={field_id}
                    field_label={field_label}
                    field_options={field_options}
                    section={section}
                />
            );
        default:
            return null;
    }
}

export default Element;
