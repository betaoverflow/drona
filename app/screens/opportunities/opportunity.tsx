import React from 'react';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native';
import OpportunityType from './opportunityType';


const Opportunity: React.FC<OpportunityType> =  ({ url, company, role, duration, deadline}) => {
    return (
        <View>
            <Image source = {{uri: url}} />
            <Text>opp</Text>
            <Text> { company } </Text>
            <Text> { role } </Text>
            <Text> { duration } months </Text>
            <Text> { deadline } </Text>
        </View>
    );
}

export default Opportunity;