import React, { useState, useEffect } from "react";
//components
import FormDynamic from "../component/FormDinamic/FormDynamic";
import Alert from "../component/Alert/Alert";
//formElement
import formElement from "./formElement";

function Home() {
    const [elements, setElements] = useState(formElement[0]);
    const myStyle = {
        background: "#22D16B",
        color: "#1F3F4A",
    };

    useEffect(() => {
        setElements(formElement[0]);
    }, [formElement]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(elements);
    };

    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div
                    hidden={true}
                    className='col-md-8 offset-md-2 col-lg-4 offset-lg-4'
                >
                    <Alert
                        typeAlert={"info"}
                        message={
                            "Problemas con el servidor en estos momentos intenta tu proceso en unos minutos."
                        }
                    />
                    <Alert
                        typeAlert={"success"}
                        message={
                            "Problemas con el servidor en estos momentos intenta tu proceso en unos minutos."
                        }
                    />
                    <Alert
                        typeAlert={"warning"}
                        message={
                            "Problemas con el servidor en estos momentos intenta tu proceso en unos minutos."
                        }
                    />
                    <Alert
                        typeAlert={"danger"}
                        message={
                            "Problemas con el servidor en estos momentos intenta tu proceso en unos minutos."
                        }
                    />
                </div>
                <div className='col-md-8 offset-md-2 col-lg-4 offset-lg-4'>
                    <FormDynamic
                        formElement={elements}
                        actionForm={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
