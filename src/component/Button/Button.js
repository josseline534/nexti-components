import React from "react";
import "./button.css";
function Button({ typeButton, text, styles, action }) {
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
}

export default Button;
