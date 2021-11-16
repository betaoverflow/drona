import React, { useState, useEffect } from 'react'
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
import company from '../components/opportunities/companyType'
import filterOpportunities from '../components/opportunities/FilterOpportunities'
import axios from 'axios'

const renderCompany: ListRenderItem<OpportunityType> = ({ item }) => (
    <Opportunity id={item.id} url={item.url} tag={item.tag} company={item.company} role={item.role} logo={item.logo} />
)



const CustomSeparator = styled.View`
    width: 100%;
    height: 0px;
`

export default function Opportunities() {
    const [opportunity, setOpportunity] = useState<company[]>([])
    const [filteredOpportunity, setFilteredOpportunity] = useState<company[]>()
    const [tag, _] = useState<TagType[] | null>(TagData)
    const [selectedTag, setSelectedTag] = useState<number>(-1);
    
    const renderTag: ListRenderItem<TagType> = ({ item }) => <Tag setSelectedTag={setSelectedTag} id={item.id} selectedTag={selectedTag} tag={item.tag} />
    
    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const res = await axios.get(`http://drona-ibm.herokuapp.com/api/opportunity`)
                
                setOpportunity(res.data)

                setSelectedTag(1);

                let resFiltered = filterOpportunities(opportunity, tag![selectedTag - 1]);
                setFilteredOpportunity(resFiltered)
                
            } catch (error) {
                console.log(error)
            }
        }    

        fetchOpportunities();

    }, [])

    useEffect(() => {
        let res = filterOpportunities(opportunity, tag![selectedTag - 1]);
        setFilteredOpportunity(res)

    }, [selectedTag])

        return (
        <View>
            <View style={{ height: 20 }}></View>
            <FlatList data={tag} horizontal renderItem={renderTag} extraData={selectedTag} keyExtractor={item => item.id} />
            <View style={{ height: 20 }}></View>
            <FlatList
                ItemSeparatorComponent={CustomSeparator}
                data={filteredOpportunity}
                renderItem={renderCompany}
                keyExtractor={item => item._id}
            />
        </View>
    )
}
