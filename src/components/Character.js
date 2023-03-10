import React from "react"; 

const Character = (props) => {
    return (
        <div data-test="component-character">
            <h1 data-test="char-name">{name}</h1>
            <img data-test="char-img"/>
        </div>
    )
}

export default Character; 