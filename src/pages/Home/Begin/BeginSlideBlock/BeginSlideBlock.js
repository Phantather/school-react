import React from 'react';

const BeginSlideBlock = (props) => {
    return (
        <div className="begin__slideBlock"
             style={{background: `url("${props.img}") center/cover no-repeat`}}
        >
            <h2 className="begin__title">
                {props.title}
            </h2>
        </div>
    );
};

export default BeginSlideBlock;