import React, {useState} from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Text, View } from '../components/Themed';
import Opportunity from './opportunities/opportunity';
import OpportunityType from './opportunities/opportunityType';
import oppData from './opportunities/opporutnitiesData.json';


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

export default function Opportunities() {
  const [opportunites, setOpportunities] = useState<OpportunityType[] | null>(oppData);
  
  return (
    <View>
      <FlatList
        data={opportunites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
