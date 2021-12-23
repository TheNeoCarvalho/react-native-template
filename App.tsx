/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Dimensions
} from 'react-native';

const App = () => {
 

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#000'} barStyle='light-content' />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{ backgroundColor: '#000', flex: 1, height: Dimensions.get('window').height , justifyContent: 'center', alignItems: 'center'}}  
        >
          <Text style={{ color: 'white', fontSize: 50 }}>Ops..</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
