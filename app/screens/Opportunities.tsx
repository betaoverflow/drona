import React, { useState } from 'react'
import { ListRenderItem } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { View } from '../components/Themed'
import Opportunity from '../components/opportunities/opportunity'
import OpportunityType from '../components/opportunities/opportunityType'
import oppData from '../components/opportunities/opporutnitiesData.json'
import styled from '@emotion/native'

const renderItem: ListRenderItem<OpportunityType> = ({ item }) => (
    <Opportunity id={item.id} url={item.url} tag={item.tag} company={item.company} role={item.role} logo={item.logo} />
)

const CustomSeparator = styled.View`
    width: 100%;
    height: 0px;
`

export default function Opportunities() {
    const [opportunites, setOpportunities] = useState<OpportunityType[] | null>(oppData)

    return (
        <>
            <View>
                <View style={{ height: 10 }}></View>
                <FlatList
                    ItemSeparatorComponent={CustomSeparator}
                    data={opportunites}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    )
}
