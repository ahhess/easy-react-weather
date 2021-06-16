import React from 'react';
import styled from '@emotion/styled';

const WeatherIcon = (props) => {
    
    const MyIcon = styled.img`
        width: 40%;
    `
      
    return (
        <MyIcon src="./img/clouds.jpg" alt="Weather Icon" />
    );
}

export default WeatherIcon;