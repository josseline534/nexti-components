import React from "react";
import "./button.css";
function Button({ text, styles, action }) {
    return (
        <button
            onClick={action}
            className='btn-general btn btn-lg'
            style={styles}
        >
            {text}
        </button>
    );
}

export default Button;
