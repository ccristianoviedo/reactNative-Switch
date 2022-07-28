import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from '../screens/Home'
import Category from '../screens/Category'
import Details from '../screens/Details'

const Stack = createNativeStackNavigator()

const MainStack =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                
                <Stack.Screen
                    name="Home"
                    component={Home}           
                />
                 <Stack.Screen
                    name="Category"
                    component={Category}           
                />
                 <Stack.Screen
                    name="Details"
                    component={Details}           
                />
            

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack