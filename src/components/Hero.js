import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
    background-color: ${props => props.bgColor};
    margin: 0 .5rem;
    padding: 0 2rem;

    h3 {
        font-size: 3rem;
        margin: 0;
    }

    p {
        color: #660900;
        font-size: 2rem;
    }
`

export default function Hero(props) {
    return (
        <HeroContainer bgColor={props.bgColor}>
            <motion.div
                animate={{
                    opacity: [0,1]
                }}
                transition={{
                    delay: .5
                }}
            >
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
            </motion.div>
        </HeroContainer>
    )
}
