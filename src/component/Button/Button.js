import React from "react";
import "./button.css";
function Button({ typeButton, text, styles, action }) {
    switch (typeButton) {
        case "button":
            return (
                <button
                    type={typeButton}
                    onClick={action}
                    className='btn-general btn btn-lg'
                    style={styles}
                >
                    {text}
                </button>
            );
        case "submit":
            return (
                <button
                    type={typeButton}
                    className='btn-general btn btn-lg'
                    style={styles}
                    onClick={action}
                >
                    {text}
                </button>
            );
        default:
            return null;
    }
}

export default Button;
