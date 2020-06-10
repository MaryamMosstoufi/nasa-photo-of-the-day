import React, { useState } from 'react';

function Hero(props) {

    return (
        <div>
            <img src={props.url} alt='' />
        </div>
    );
}
export default Hero;