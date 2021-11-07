import React from 'react';
import { Text } from '../../components/Themed';
import OpportunityType from './opportunityType';
import styled from '@emotion/native';
import { Button } from 'react-native';

const OpportunityCard = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 250px;
    width: 40%;
    align-items: center;
    border-radius: 12px;
    background-color: gray;
`;

const CircularImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 60px;
`;

const OppurtunityContent = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100px;
    align-items: center;
`;

const Opportunity: React.FC<OpportunityType> =  ({ url, company, role, duration, deadline}) => {
    return (
        <OpportunityCard>
            <CircularImage source={{uri: url}} />
            <OppurtunityContent>
                <Text> { company } </Text>
                <Text> { role } </Text>
                <Text> { duration } months </Text>
                <Text> { deadline } </Text>
                <Button onPress={() => {}} title="visit" />
            </OppurtunityContent>
        </OpportunityCard>
    );
}

export default Opportunity;