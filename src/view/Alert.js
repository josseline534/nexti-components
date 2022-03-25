import React from "react";
import Alert from "../component/Alert/Alert";
function AlertView() {
    return (
        <div className='container mt-3'>
            <div className='row g-3'>
                <div className='col-md-8 offset-md-2 col-lg-4 offset-lg-4'>
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
            </div>
        </div>
    );
}

export default AlertView;
