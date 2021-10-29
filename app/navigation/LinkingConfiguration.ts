import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Home: {
                screens: {
                    Home: 'home',
                },
            },
            Compiler: 'compiler',
            NotFound: '*',
        },
    },
}

export default linking
