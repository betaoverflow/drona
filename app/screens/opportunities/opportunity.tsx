import React from 'react';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';
import OpportunityType from './opportunityType';
import styled from '@emotion/native';
import { SIZES } from '../../constants';

const Box = styled.View`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 50%;
    align-items: center;
    background-color: beige;
`;


const Opportunity: React.FC<OpportunityType> =  ({ url, company, role, duration, deadline}) => {
    return (
        <Box>
            <Image source = {{uri: url}} />
            <Text>opp</Text>
            <Text> { company } </Text>
            <Text> { role } </Text>
            <Text> { duration } months </Text>
            <Text> { deadline } </Text>
        </Box>
    );
}

export default Opportunity;