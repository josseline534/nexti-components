import React from "react";
//components
import FormDynamic from "../component/FormDynamic";
import Button from "../component/Button/Button";

function Home() {
    const myStyle = {
        background: "#22D16B",
        color: "#1F3F4A",
    };
    return (
        <>
            <FormDynamic />
            <Button text={"Continuar"} styles={myStyle} />
        </>
    );
}

export default Home;
