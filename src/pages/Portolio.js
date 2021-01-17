import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const PortfolioContainer = styled.div`
    padding: 0 2.5rem;
    font-size: 1rem;

    .header {
        border-top: 5px solid #b8001c;
        color: #B30F00;
        font-weight: bolder;
    }

    p:first-child {
        padding: 1rem 0 0 0;
    }

    .card-container {
        @media(min-width: 1012px) {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }

    .card {
        box-shadow: 0 2px 23px 0 rgba(112,81,239,.1);
        text-align: center;
        padding: 1rem 0;
        border-radius: 15px;

        &:last-child {
            margin-top: 1rem;
        }    

        p, h1 {
            padding: 0;
        }

        h4 {
            padding: 0;
            display: inline;
            border-bottom: 5px solid red;
        }
    }
    ul {
        list-style-type: none;
        padding: 0;

        li {
            margin: 1rem;
        }
    }

    .button {
        background-color: red;
        color: white;
        padding: .2rem 1rem;
        border-radius: 5px;
    }
`

export default function Portfolio() {
    return (
        <PortfolioContainer>
            <motion.p
                className="header"
                animate={{
                    opacity: [0, 1]
                }}
                transition={{
                    delay: 1
                }}
            >My Portfolio</motion.p>
            <div className="card-container">
                <motion.div
                    animate={{
                        opacity: [0, 1]
                    }}
                    transition={{
                        delay: 1.5
                    }}
                    className="card"
                >
                    <h4>Work</h4>
                    <ul>
                        <li><strong style={{ color: '#660900' }}>OrdrSlip</strong>: Nov. 2020 - Present</li>
                        <li><strong style={{ color: '#660900' }}>Woz U</strong>: Oct. 2019 - Present</li>
                    </ul>
                    <a className="button" href="https://www.linkedin.com/in/marco-chavez-jr-334514b4/" target="__blank">Visit My Linked In</a>
                </motion.div>
                <motion.div
                    animate={{
                        opacity: [0, 1]
                    }}
                    transition={{
                        delay: 1.5
                    }}
                    className="card"
                >
                    <h4>Skills</h4>
                    <ul>
                        <li><strong style={{ color: '#660900' }}>HTML, CSS</strong>: Expert</li>
                        <li><strong style={{ color: '#660900' }}>JavaScript</strong>: Advanced</li>
                        <li><strong style={{ color: '#660900' }}>React</strong>: Advanced</li>
                        <li><strong style={{ color: '#660900' }}>Angular</strong>: Advanced</li>
                        <li><strong style={{ color: '#660900' }}>SQL</strong>: Proficient</li>
                        <li><strong style={{ color: '#660900' }}>NoSQL</strong>: Proficient</li>
                        <li><strong style={{ color: '#660900' }}>Deployment (AWS, DGO)</strong>: Proficient</li>
                        <li><strong style={{ color: '#660900' }}>Python</strong>: Proficient</li>
                    </ul>
                    <a className="button" href="https://www.github.com/mxrcochxvez" target="__blank">Visit My GitHub</a>
                </motion.div>
            </div>
        </PortfolioContainer>
    )
}