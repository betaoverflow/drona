import React from 'react'
import { View } from '../Themed'
import styled from '@emotion/native'
import TagType from './TagType'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Tag = styled.Text`
    color: #fff;
    background-color: #454545;
    border-radius: 20px;
    padding: 12px;
    height: 45px;
    margin-left: 14px;
`

const Opportunity: React.FC<TagType> = ({ tag }) => {
    return (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => {}}>
                <Tag>{tag}</Tag>
            </TouchableOpacity>
        </View>
    )
}

export default Opportunity
