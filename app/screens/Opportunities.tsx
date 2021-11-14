import React from 'react'
import { ListRenderItem } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { View } from '../components/Themed'
import Opportunity from '../components/opportunities/opportunity'
import OpportunityType from '../components/opportunities/opportunityType'
import ConfirmedOpportunities from '../components/opportunities/ConfirmedOpportunity'
import styled from '@emotion/native'

const renderItem: ListRenderItem<OpportunityType> = ({ item }) => (
    <Opportunity id={item.id} url={item.url} tag={item.tag} company={item.company} role={item.role} logo={item.logo} />
)

const CustomSeparator = styled.View`
    width: 100%;
    height: 0px;
`

export default function Opportunities() {
    let opportunites = ConfirmedOpportunities()

    return (
        <>
            <View>
                <View style={{ height: 10 }}></View>
                <FlatList
                    ItemSeparatorComponent={CustomSeparator}
                    data={opportunites}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </View>
        </>
    )
}
