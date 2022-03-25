// eslint-disable-next-line no-unused-expressions
const formElement = [
    [
        {
            page_label: "Datos personales",
            fields: [
                {
                    field_id: "email",
                    field_label: "¿Cuál es tu correo electrónico?",
                    field_mandatory: "yes",
                    field_placeholder: "Ingresa tu correo",
                    field_type: "email",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "El campo email no puede ser vacio",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "",
                        error: "",
                    },
                },
                {
                    field_id: "emailConfirm",
                    field_label: "Ingresa otra vez tu correo",
                    field_mandatory: "yes",
                    field_placeholder: "Verifica tu correo",
                    field_type: "email",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: false,
                        error: "",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "",
                        error: "",
                    },
                },
                /*  {
                    field_id: "age",
                    field_label: "¿Cuál es tu edad?",
                    field_mandatory: "yes",
                    field_placeholder: "Ingresa tu edad",
                    field_type: "number",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                    field_admit: {
                        value: "",
                        error: "",
                    },
                },*/
                {
                    field_id: "identificate",
                    field_label: "¿Cuál es tu cédula de identidad?",
                    field_mandatory: "yes",
                    field_placeholder: "Ingresa tu cédula",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "NUMBERS",
                        error: "Solo debe ingresar numeros",
                    },
                },
                {
                    field_id: "fingerprintCode",
                    field_label: "Ingresa tu código dactilar",
                    field_mandatory: "yes",
                    field_placeholder: "Código dactilar de tu cédula",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help:
                        "Encuéntralo en la parte superior derecha del reverso de tu cédula",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 5,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "LETTERSNUMBERS",
                        error: "No debe ingresar caracteres",
                    },
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
                    field_width: "col-md-12",
                    field_required: {
                        value: true,
                        error: "Debe aceptar las politicas",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 5,
                        error: "No cumple con los caracteres maximos",
                    },
                },
            ],
            initialValues: {
                /* email: "",
                emailConfirm: "",
                age: 0,
                identificate: "",
                fingerprintCode: "",
                authorization: false, */
            },
        },
    ],
    [
        {
            page_label: "Datos personales",
            fields: [
                {
                    field_id: "identificate",
                    field_label: "Cedula",
                    field_mandatory: "yes",
                    field_placeholder: "0956781618",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "error en cedula",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 10,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "fingerprintCode",
                    field_label: "Código dactilar",
                    field_mandatory: "yes",
                    field_placeholder: "F552XXXX11",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: false,
                        error: "",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "",
                        error: "",
                    },
                },
                {
                    field_id: "firstName",
                    field_label: "Primer nombre",
                    field_mandatory: "yes",
                    field_placeholder: "Aldo",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "secondName",
                    field_label: "Segundo nombre",
                    field_mandatory: "yes",
                    field_placeholder: "Javier",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "lastName",
                    field_label: "Apellido paterno",
                    field_mandatory: "yes",
                    field_placeholder: "Mora",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "motherLastName",
                    field_label: "Apellido materno",
                    field_mandatory: "yes",
                    field_placeholder: "Javier",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "dateBirth",
                    field_label: "Fecha de nacimiento",
                    field_mandatory: "yes",
                    field_placeholder: "1990-05-12",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "nationality",
                    field_label: "Nacionalidad",
                    field_mandatory: "yes",
                    field_placeholder: "Ecuatoriana",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "civilStatus",
                    field_label: "Estado civil",
                    field_mandatory: "yes",
                    field_placeholder: "Soltero/a",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "phone",
                    field_label: "Teléfono celular",
                    field_mandatory: "yes",
                    field_placeholder: "0934512365",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "countryResidence",
                    field_label: "País de residencia",
                    field_mandatory: "yes",
                    field_placeholder: "Ecuador",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
            ],
            initialValues: {
                identificate: "",
                fingerprintCode: "",
                firstName: "",
                secondName: "",
                lastName: "",
                motherLastName: "",
                dateBirth: "",
                nationality: "",
                civilStatus: "",
                phone: "",
                countryResidence: "",
            },
        },
        {
            page_label: "Información laboral",
            fields: [
                {
                    field_id: "employer",
                    field_label: "¿Quién es tu empleador?",
                    field_mandatory: "yes",
                    field_placeholder: "Tengo mi propio negocio",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "El campo email no puede ser vacio",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "job",
                    field_label: "¿Qué tipo de trabajo haces?",
                    field_mandatory: "yes",
                    field_placeholder: "Independiente",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: false,
                        error: "",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "monthlySalary",
                    field_label: "¿Cuánto es tu sueldo mensual?",
                    field_mandatory: "yes",
                    field_placeholder: "0",
                    field_width: "col-md-12",
                    field_type: "text",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "monthlyExpenditure",
                    field_label: "¿Cuánto es tu gasto mensual?",
                    field_mandatory: "yes",
                    field_placeholder: "0",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "NUMBERS",
                        error: "Solo debe ingresar numeros",
                    },
                },
                {
                    field_id: "monthlyIncome",
                    field_label: "¿Cuál es el total de tus ingresos mensuales?",
                    field_mandatory: "yes",
                    field_placeholder: "0",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 5,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "LETTERSNUMBERS",
                        error: "No debe ingresar caracteres",
                    },
                },
                {
                    field_id: "workingTime",
                    field_label: "¿Cuánto tiempo tienes en tu trabajo?",
                    field_mandatory: "yes",
                    field_placeholder: "Ingresa el tiempo en años",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Debe aceptar las politicas",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 5,
                        error: "No cumple con los caracteres maximos",
                    },
                },
            ],
            initialValues: {
                employer: "",
                job: "",
                monthlySalary: "",
                monthlyExpenditure: "",
                monthlyIncome: "",
                workingTime: "",
            },
        },
    ],
    [
        {
            page_label: "Información laboral",
            fields: [
                {
                    field_id: "business",
                    field_label: "¿En que empresa trabajas?",
                    field_mandatory: "yes",
                    field_placeholder: "Escribe el nombre del empresa",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "error en cedula",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 10,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "economicActivity",
                    field_label: "Actividad Económica",
                    field_mandatory: "yes",
                    field_placeholder: "Detalla tu actividad",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: false,
                        error: "",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "",
                        error: "",
                    },
                },
                {
                    field_id: "profession",
                    field_label: "¿Cuál es tu profesión?",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu profesión",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "jobTitle",
                    field_label: "¿Qué cargo tienes?",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu cargo",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "provinceJob",
                    field_label: "Elige una provincia",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu provincia",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "cityJob",
                    field_label: "Elige una ciudad",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu ciudad",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "address",
                    field_label: "¿Cuás es la dirección de tu trabajo?",
                    field_mandatory: "yes",
                    field_placeholder: "Escribe una dirección",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "phoneWork",
                    field_label: "¿Cuás es el teléfono de tu trabajo?",
                    field_mandatory: "yes",
                    field_placeholder: "Escribe un número de teléfono",
                    field_type: "text",
                    field_width: "col-md-12",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                },
            ],
            initialValues: {
                business: "",
                economicActivity: "",
                profession: "",
                jobTitle: "",
                provinceJob: "",
                cityJob: "",
                address: "",
                phoneWork: "",
            },
        },
        {
            page_label: "Información de contacto",
            fields: [
                {
                    field_id: "provinceContact",
                    field_label: "Elige una provinica",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu provincia",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "El campo email no puede ser vacio",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "cityContact",
                    field_label: "Elige una ciudad",
                    field_mandatory: "yes",
                    field_placeholder: "Elige tu ciudad",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: false,
                        error: "",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 50,
                        error: "No cumple con los caracteres maximos",
                    },
                },
                {
                    field_id: "addressHome",
                    field_label: "¿Cuás es la dirección de tu casa?",
                    field_mandatory: "yes",
                    field_placeholder: "Escribe una dirección",
                    field_width: "col-md-12",
                    field_type: "text",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con la edad minima",
                    },
                    field_max: {
                        value: 100,
                        error: "No cumple con la edad maxima",
                    },
                },
                {
                    field_id: "phoneHome",
                    field_label: "¿Cuál es  teléfono de tu casa?",
                    field_mandatory: "yes",
                    field_placeholder: "Escribe un teléfono",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 10,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 13,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "NUMBERS",
                        error: "Solo debe ingresar numeros",
                    },
                },
                {
                    field_id: "typeHousing",
                    field_label: "¿Qué tipo de vivienda tienes?",
                    field_mandatory: "yes",
                    field_placeholder: "Tipo de vivienda",
                    field_type: "text",
                    field_width: "col-md-6",
                    field_value: "",
                    field_help: "",
                    field_required: {
                        value: true,
                        error: "Campo requerido",
                    },
                    field_min: {
                        value: 1,
                        error: "No cumple con los caracteres minimos",
                    },
                    field_max: {
                        value: 5,
                        error: "No cumple con los caracteres maximos",
                    },
                    field_admit: {
                        value: "LETTERSNUMBERS",
                        error: "No debe ingresar caracteres",
                    },
                },
            ],
            initialValues: {
                provinceContact: "",
                cityContact: "",
                addressHome: "",
                phoneHome: "",
                typeHousing: "",
            },
        },
    ],
    [
        {
            page_label: "Datos normativos",
            fields: [
                {
                    field_id: "countryBirthCheck",
                    field_label:
                        "¿Tú país de nacimiento es diferente a Ecuador?",
                    field_type: "radio",
                    field_width: "col-md-12",
                    field_options: [
                        {
                            option_id: "countrySi",
                            option_label: "Sí",
                            option_value: true,
                        },
                        {
                            option_id: "countryNo",
                            option_label: "No",
                            option_value: false,
                        },
                    ],
                    field_required: {
                        value: false,
                        error: "",
                    },
                },
                {
                    field_id: "activeRUC",
                    field_label: "¿Tienes un RUC activo?",
                    field_type: "radio",
                    field_width: "col-md-12",
                    field_options: [
                        {
                            option_id: "rucSi",
                            option_label: "Sí",
                            option_value: true,
                        },
                        {
                            option_id: "rucNo",
                            option_label: "No",
                            option_value: false,
                        },
                    ],
                    field_required: {
                        value: false,
                        error: "",
                    },
                },
                {
                    field_id: "taxResidence",
                    field_label:
                        "¿Tienes residencia fiscal en un país diferente a Ecuador?",
                    field_type: "radio",
                    field_width: "col-md-12",
                    field_options: [
                        {
                            option_id: "ResidenceSi",
                            option_label: "Sí",
                            option_value: true,
                        },
                        {
                            option_id: "ResidenceNo",
                            option_label: "No",
                            option_value: false,
                        },
                    ],
                    field_required: {
                        value: false,
                        error: "",
                    },
                },
            ],
            initialValues: {
                countryBirthCheck: false,
                activeRUC: false,
                taxResidence: false,
            },
        },
    ],
];

export default formElement;
