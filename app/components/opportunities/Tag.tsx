import React from 'react'
import { View } from '../Themed'
import styled from '@emotion/native'
import TagType from './TagType'

const Tag = styled.Text`
    color: #fff;
    background-color: #454545;
    border-radius: 20px;
    padding: 3px;
    padding-left: 50px;
    padding-right: 50px;
    height:25px;
    margin-left: 7px;
`

const Opportunity: React.FC<TagType> = ({ tag }) => {
    return (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <Tag>{tag}</Tag>
        </View>
    )
}

export default Opportunity
