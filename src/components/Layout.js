import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
    padding: 0;
    font-family: 'Montserrat', cursive;
`

const Layout = ({ children }) => {
    return(
        <Body>
            {children}
        </Body>
    )
}

export default Layout;