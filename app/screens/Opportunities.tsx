import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Opportunity from './opportunities/opportunity';

export default function TabTwoScreen() {
  return (
    <View>
      <Opportunity />
      <Opportunity />
    </View>
  );
}
