import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import CompilerScreen from '../screens/CompilerScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import Home from '../screens/Home'
import Opportunities from '../screens/Opportunities'
import Questionnaire from '../screens/Questionnare'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#0B4068' },
                headerTitleStyle: { fontWeight: '800' },
            }}
        >
            <Stack.Screen name="DRONA" component={Home} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Compiler" component={CompilerScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#C0C0C0',
                tabBarActiveBackgroundColor: Colors[colorScheme].tint,
                tabBarInactiveBackgroundColor: Colors[colorScheme].tint,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderRadius: 60,
                    position: 'absolute',
                    overflow: 'hidden',
                    left: '5.51%',
                    right: '5.51%',
                    bottom: '2%',
                    padding: 2,
                    backgroundColor: '#0B4068',
                },

                headerTintColor: 'white',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#0B4068' },
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={RootNavigator}
                options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialIcons name="home" color={color} size={30} />,
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Compiler')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome name="info-circle" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Questionnaire"
                component={Questionnaire}
                options={{
                    title: 'Questionnaire',
                    tabBarIcon: ({ color }) => <FontAwesome name="file-text-o" color={color} size={26} />,
                }}
            />
            <BottomTab.Screen
                name="Opportunities"
                component={Opportunities}
                options={{
                    title: 'Opportunities',
                    tabBarIcon: ({ color }) => <MaterialIcons name="lightbulb" color={color} size={30} />,
                }}
            />
        </BottomTab.Navigator>
    )
}
