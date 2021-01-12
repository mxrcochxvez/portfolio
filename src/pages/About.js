import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
    padding: 0 2.5rem;
    font-size: 1.2rem;

    .header {
        border-top: 5px solid #b8001c;
        color: #B30F00;
        font-weight: bolder;
    }

    p:first-child {
        padding: 1rem 0 0 0;
    }
`

export default function About() {

    const meInfo = {
        title: "Made in Santa Cruz County raised in Fresno, California."
    }

    return (
        <AboutContainer>
            <motion.p 
                className="header"
                animate={{
                    opacity: [0, 1]
                }}
                transition={{
                    delay: 1
                }}
            >{meInfo.title}</motion.p>
            <motion.div
                animate={{
                    opacity: [0,1]
                }}
                transition={{
                    delay: 1.5
                }}
            >
                <p>Tech has been a passion of mine for as long as I can remember.</p>
                <p>Discovering what interested me the most about tech was the hard part. The devices we use every day in our lives
                    hold such deep secrets and I wanted to know them all!
                </p>
                <p>It started off with picking apart operating systems with Linux, and slowly grew into building modifcations for games
                    such as <a href="https://www.minecraft.net/">MineCraft</a>.
                </p>
                <p>In 2018 - working as a warehouse associate for a company called  
                     <a href="https://www.Boumatic.com/"> BouMatic</a>, I decided to go back to school.
                    While pursuing my options, my girlfriend at the time reminded me of the passion I have for computers
                    and suggested a programming bootcamp called <a href="https://www.woz-u.com/">Woz U</a>.
                </p>
                <p>I spent 8 months, and over 600 hours at <a href="https://www.woz-u.com/">Woz U</a> becoming the Software Developer I am today!</p>
            </motion.div>
        </AboutContainer>
    )
}
