import React from 'react'
import { View } from '../Themed'
import OpportunityType from './opportunityType'
import styled from '@emotion/native'
import { TouchableOpacity, Linking } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const OpportunityCard = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
    width: 90%;
    align-items: center;
    border-radius: 12px;
    background-color: #000;
`

const CircularImage = styled.Image`
    width: 100%;
    height: 150px;
`

const OppurtunityContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    align-items: center;
    padding: 2%;
`
const CompanyContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 60px;
    width: 100%;
    align-items: center;
    padding: 5%;
`

const Company = styled.Text`
    color: #fff;
    background-color: grey;
    border-radius: 20px;
    padding: 3px;
    padding-left: 7px;
    padding-right: 7px;
`

const Tag = styled.Text`
    color: #fff;
    background-color: grey;
    border-radius: 20px;
    padding: 3px;
    padding-left: 7px;
    padding-right: 7px;
    margin-left: 7px;
`

const Role = styled.Text`
    color: #fff;
    font-size: 18px;
`

const Opportunity: React.FC<OpportunityType> = ({ url, tag, role, company, logo }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <OpportunityCard>
                <CircularImage source={{ uri: logo }} />
                <OppurtunityContent>
                    <Role> {role} </Role>
                    <TouchableOpacity onPress={() => Linking.openURL(url)}>
                        <MaterialIcons name="open-in-new" size={24} color="white" />
                    </TouchableOpacity>
                </OppurtunityContent>
            </OpportunityCard>
            <CompanyContent>
                <Company> {company} </Company>
                <Tag> {tag} </Tag>
            </CompanyContent>
        </View>
    )
}

export default Opportunity
