import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {
    
    const Temp = styled.h1`
        font-size: 2rem;
        font-weight: 200;
    `

    const State = styled.h3`
        font-size: 1.2rem;
    `
    
    return (
        <Condition>
            <Temp>20 °C</Temp>
            <State>Wolken</State>
        </Condition>
    );
}

export default Condition;