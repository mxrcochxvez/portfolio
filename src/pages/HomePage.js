import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomePage = (props) => {

    return(
        <>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </>
    )
}

export default HomePage;