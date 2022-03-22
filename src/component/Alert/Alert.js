import React from "react";
import TypeAlert from "./Types/TypeAlert";
function Alert({ typeAlert, message }) {
    switch (typeAlert) {
        case "info":
            return (
                <TypeAlert
                    classAlert={"alert d-flex align-items-center alert-primary"}
                    message={message}
                    titleAlert={"ALert Info"}
                />
            );
        case "success":
            return (
                <TypeAlert
                    classAlert={"alert d-flex align-items-center alert-success"}
                    message={message}
                    titleAlert={"ALert Success"}
                />
            );
        case "warning":
            return (
                <TypeAlert
                    classAlert={"alert d-flex align-items-center alert-warning"}
                    message={message}
                    titleAlert={"ALert Warning"}
                />
            );
        case "danger":
            return (
                <TypeAlert
                    classAlert={"alert d-flex align-items-center alert-danger"}
                    message={message}
                    titleAlert={"Alert Error"}
                />
            );
        default:
            return null;
    }
}

export default Alert;
