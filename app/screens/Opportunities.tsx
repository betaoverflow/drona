import * as React from 'react';
import { ListRenderItem, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Opportunity from './opportunities/opportunity';
import OpportunityType from './opportunities/opportunityType';
import oppData from './opportunities/opporutnitiesData.json';


const renderItem: ListRenderItem<OpportunityType> = ({item}) => (
  <Opportunity
    url = {item.url}
    company = {item.company}
    duration = {item.duration }
    role = {item.role}
    deadline = {item.deadline}
  />
)

export default function Opportunities() {
  return (
    <View>
      <FlatList
        data={oppData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
