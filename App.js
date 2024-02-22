import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as React from 'react';


import { View } from 'react-native';

import Footer from './src/components/Footer';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#84c4c0',
  },
};


function App(){
  return(
  <NavigationContainer style={{ backgroundColor : 'white'}} theme={MyTheme}>
    <View style={{
        flex: 1
    }}>
    <Footer/>
    </View>
    
</NavigationContainer>
    
  )
}

export default App;