import React, { useState } from 'react'
import { ListRenderItem, ScrollView } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from '../components/Themed'
import Opportunity from './opportunities/opportunity'
import OpportunityType from './opportunities/opportunityType'
import oppData from './opportunities/opporutnitiesData.json'
import styled from '@emotion/native'

const renderItem: ListRenderItem<OpportunityType> = ({ item }) => (
    <Opportunity id={item.id} url={item.url} tag={item.tag} company={item.company} role={item.role} />
)

const CustomSeparator = styled.View`
    width: 100%;
    height: 20px;
`

export default function Opportunities() {
    const [opportunites, setOpportunities] = useState<OpportunityType[] | null>(oppData)

    return (
        <ScrollView>
            <View>
                {/* Want to get update whenever we push a new oppurtunity? Click here */}
                <TouchableOpacity onPress={() => console.log('When clicked here get the option to login')}>
                    <Text style={{ color: 'red' }}>Press Here! mnklnlnm</Text>
                </TouchableOpacity>
                <FlatList
                    ItemSeparatorComponent={CustomSeparator}
                    data={opportunites}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    )
}
