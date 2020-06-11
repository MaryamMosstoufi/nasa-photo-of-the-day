import React, { useState } from 'react';

function Hero(props) {
    console.log('hero', props);


    if (!props.imageOfDay.url) return <h3>Loading...</h3>;


    return (
        <div>
            <h2>{props.imageOfDay.title}</h2>
            {/* <div>{props.imageOfDay.date}</div> */}

            {(props.imageOfDay.media_type === "image") &&
                <img src={props.imageOfDay.url} alt='' />
            }
            {(props.imageOfDay.media_type === "video") &&
                <iframe
                    width="960"
                    height="540"
                    src={props.imageOfDay.url}>
                </iframe>
            }
            <div>

                <p>{props.imageOfDay.explanation}</p>

                {props.imageOfDay.copyright &&
                    < small >
                        Image Credit &amp; Copyright<br />
                        <a href=''>{props.imageOfDay.copyright}</a>
                    </small>
                }
            </div>
        </div >
    );
}
export default Hero;