import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;

    img {
        margin: 0 auto;
    }
    p{
        text-align: left;
    }
`;


function Hero(props) {
    //console.log('hero', props);


    if (!props.imageOfDay.url) return <h3>Loading...</h3>;


    return (
        <Container class='container bg-gray-200 p-12'>
            <div class=''>
                <div class=''>
                    <h2 class='text-blue-800 font-extrabold text-2xl m-8'>{props.imageOfDay.title}</h2>
                    {/* <div>{props.imageOfDay.date}</div> */}
                    <form onSubmit={props.handleSubmit} class='mb-8'>
                        <input type="date" value={props.dateSelected} onChange={props.handleChange} />
                    </form>

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
                </div>

                <div class='m-8'>
                    <p>{props.imageOfDay.explanation}</p>

                    {(props.imageOfDay.copyright != null) &&
                        < small >
                            Image Credit &amp; Copyright<br />
                            <a href=''>{props.imageOfDay.copyright}</a>
                        </small>
                    }
                </div>
            </div >
        </Container>
    );
}
export default Hero;