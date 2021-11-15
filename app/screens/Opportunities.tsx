import React, { useState } from 'react'
import { ListRenderItem } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { View } from '../components/Themed'
import Opportunity from '../components/opportunities/opportunity'
import OpportunityType from '../components/opportunities/opportunityType'
import ConfirmedOpportunities from '../components/opportunities/ConfirmedOpportunity'
import styled from '@emotion/native'
import Tag from '../components/opportunities/Tag'
import TagType from '../components/opportunities/TagType'
import TagData from '../components/opportunities/TagData.json'

const renderCompany: ListRenderItem<OpportunityType> = ({ item }) => (
    <Opportunity id={item.id} url={item.url} tag={item.tag} company={item.company} role={item.role} logo={item.logo} />
)

const renderTag: ListRenderItem<TagType> = ({ item }) => <Tag id={item.id} tag={item.tag} />

const CustomSeparator = styled.View`
    width: 100%;
    height: 0px;
`

export default function Opportunities() {
    let opportunites = ConfirmedOpportunities()
    const [tag, _] = useState<TagType[] | null>(TagData)
    const [selectedTag, setSelectedTag] = useState<TagType | null>();

    return (
        <View>
            <View style={{ height: 10 }}></View>
            <FlatList data={tag} horizontal renderItem={renderTag} keyExtractor={item => item.id} />
            <FlatList
                ItemSeparatorComponent={CustomSeparator}
                data={opportunites}
                renderItem={renderCompany}
                keyExtractor={item => item._id}
            />
        </View>
    )
}
