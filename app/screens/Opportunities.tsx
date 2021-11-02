import React, {useState} from 'react';
import { ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Opportunity from './opportunities/opportunity';
import OpportunityType from './opportunities/opportunityType';
import oppData from './opportunities/opporutnitiesData.json';
import styled from '@emotion/native';

const renderItem: ListRenderItem<OpportunityType> = ({item}) => (
  <Opportunity
    id ={item.id}
    url = {item.url}
    company = {item.company}
    duration = {item.duration }
    role = {item.role}
    deadline = {item.deadline}
  />
)

const CustomSeparator = styled.View`
  width: 100%;
  height: 20px;
`;

export default function Opportunities() {
  const [opportunites, setOpportunities] = useState<OpportunityType[] | null>(oppData);

  return (
    <View style = {{backgroundColor: 'black'}}>
      <FlatList
        ItemSeparatorComponent={CustomSeparator}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={opportunites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}
