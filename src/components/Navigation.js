import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Navbar = styled.nav`
    border-radius: 15px;
    padding: 1px 1rem;
    color: #E61300;
    margin: .5rem;
    box-shadow: 0 2px 23px 0 rgba(112,81,239,.1);
    display: inline-block;
    `

export default function Navigation() {
    return (
        <Navbar>
            <motion.h1
                animate={{
                    opacity: [0, 1]
                 }}
            >
                MC
            </motion.h1>
        </Navbar>
    )
}
