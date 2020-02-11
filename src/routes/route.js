import React from "react";
import { View, Text, Button } from "react-native";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../Components/home/home"
import Profile from "../Components/User/profile"

const MainNavigator = createStackNavigator({
    Home    : {screen: Home},
    Profile : { screen: Profile}
},
{
initialRouteName: "Home",
headerMode: "none",
swipeEnabled: false
});
const MainRoute = createAppContainer(MainNavigator);
export default MainRoute;
