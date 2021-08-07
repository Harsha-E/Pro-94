import React,{Component} from 'react';
import StackNavigator from './stackNavigator';
import profileScreen from '../screens/profileScreen';
import logoutScreen from '../screens/logoutScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigator}/>
        <Drawer.Screen name="Profile" component={profileScreen}/>
        <Drawer.Screen name="Logout" component={logoutScreen}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;