// eslint-disable-next-line no-unused-expressions
const formElement = [
    {
        page_label: "Datos personales",
        fields: [
            {
                field_id: "email",
                field_label: "¿Cuál es tu correo electrónico?",
                field_mandatory: "yes",
                field_placeholder: "Ingresa tu correo",
                field_type: "email",
                field_value: "",
                field_help: "",
            },
            {
                field_id: "emailConfirm",
                field_label: "Ingresa otra vez tu correo",
                field_mandatory: "yes",
                field_placeholder: "Verifica tu correo",
                field_type: "email",
                field_value: "",
                field_help: "",
            },
            {
                field_id: "identificate",
                field_label: "¿Cuál es tu cédula de identidad?",
                field_mandatory: "yes",
                field_placeholder: "Ingresa tu cédula",
                field_type: "text",
                field_value: "",
                field_help: "",
            },
            {
                field_id: "fingerprintCode",
                field_label: "Ingresa tu código dactilar",
                field_mandatory: "yes",
                field_placeholder: "Código dactilar de tu cédula",
                field_type: "text",
                field_value: "",
                field_help:
                    "Encuéntralo en la parte superior derecha del reverso de tu cédula",
            },
            /* {
                field_id: "employment",
                field_label: "Employment desired",
                field_value: "Part-Time",
                field_mandatory: "yes",
                field_options: [
                    {
                        option_label: "Full-Time",
                    },
                    {
                        option_label: "Part-Time",
                    },
                ],
                field_type: "select",
            }, */
            {
                field_id: "authorization",
                field_label:
                    "Autorizo a Cooperativa Daule a verificar mi información",
                field_type: "checkbox",
                field_value: false,
            },
        ],
        initialValues: {
            email: "",
            emailConfirm: "",
            identificate: "",
            fingerprintCode: "",
            authorization: false,
        },
    },
];

export default formElement;
