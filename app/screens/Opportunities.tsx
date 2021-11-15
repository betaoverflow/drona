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



const CustomSeparator = styled.View`
    width: 100%;
    height: 0px;
`

export default function Opportunities() {
    let opportunites = ConfirmedOpportunities()
    const [tag, _] = useState<TagType[] | null>(TagData)
    const [selectedTag, setSelectedTag] = useState<number>(1);

    const renderTag: ListRenderItem<TagType> = ({ item }) => <Tag setSelectedTag={setSelectedTag} id={item.id} selectedTag={selectedTag} tag={item.tag} />
    
    return (
        <View>
            <View style={{ height: 20 }}></View>
            <FlatList data={tag} horizontal renderItem={renderTag} extraData={selectedTag} keyExtractor={item => item.id} />
            <View style={{ height: 20 }}></View>
            <FlatList
                ItemSeparatorComponent={CustomSeparator}
                data={opportunites}
                renderItem={renderCompany}
                keyExtractor={item => item._id}
            />
        </View>
    )
}
