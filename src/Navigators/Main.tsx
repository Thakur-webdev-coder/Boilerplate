import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { ExampleContainer } from '@/Containers'
import Examplecon from '@/Containers/Examplecon'
import Contact from '@/Containers/Contact'

const Tab = createBottomTabNavigator()
// const Stack = createNativeStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={ExampleContainer} /> */}
      <Tab.Screen name="Home" component={Examplecon} />
      <Tab.Screen name="Profile" component={Contact} />
    </Tab.Navigator>
  )
}

export default MainNavigator
