/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {StatusBar, Text, View, Dimensions} from 'react-native'

import colors from '@colors'
import fontSize from '@fontSize'

const App = () => {
    return (
        <>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
            <View
                style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    height: Dimensions.get('window').height,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: colors.light.primary,
                        fontSize: fontSize.veryLarge,
                    }}>
                    Lorem ipsum dolor sit ame.
                </Text>
            </View>
        </>
    )
}

export default App
