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
}) {
    switch (field_type) {
        case "email":
            return (
                <Email
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_help={field_help}
                />
            );
        case "text":
            return (
                <Input
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
                />
            );
        default:
            return null;
    }
}

export default Element;
