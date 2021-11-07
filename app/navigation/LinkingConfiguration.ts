import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            DRONA: {
                screens: {
                    Home: 'home',
                },
            },
            Compiler: 'compiler',
            LoginScreen:'LoginScreen',
            NotFound: '*',
        },
    },
}

export default linking
