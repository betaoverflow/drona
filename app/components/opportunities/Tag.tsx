import React, { PropsWithChildren } from 'react'
import { View } from '../Themed'
import styled from '@emotion/native'
import TagType from './TagType'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../../constants'

const TagComponent = styled.Text`
    border-radius: 20px;
    padding: 8px;
    padding-left: 50px;
    padding-right: 50px;
    height:40px;
    margin-left: 7px;
`

interface TagParentType {
    tag: string,
    selectedTag: number,
    id: number,
    setSelectedTag: (id: number) => void
}

const Tag: React.FC<TagParentType> = ({ id, tag, selectedTag, setSelectedTag}) => {
    const backgroundColor = selectedTag === id ? COLORS.blue : "#000";
    const textColor = "#fff";

    return (
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
            <TouchableOpacity onPress={() => setSelectedTag(id)} >
                <TagComponent
                    style={[{backgroundColor: backgroundColor}, { color: textColor }]}
                >
                    {tag}
                </TagComponent>
            </TouchableOpacity>
        </View>
    )
}

export default Tag
