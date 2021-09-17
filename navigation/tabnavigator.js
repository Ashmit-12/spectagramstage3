import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
import Feed from '../screens/feed';
import CreatePost from '../screens/createpost';

const Tab = createMaterialBottomTabNavigator();

const BottamTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
         screenOptions={({route})=>({
tabBarIcon:({focused,color,size})=>{
    let iconName 
    if(route.name==='Feed'){
        iconName=focused
        ?'book'
        :'book-outline'

    }
    else if(route.name==='CreatePost'){
        iconName=focused
        ?'create'
        :'create-outline'
    }
    return <Ionicons name={iconName} size={RFValue(25)} color={color} />
}

         })
         } 
       
             activeColor={'#B8FB3C'}
             inactiveColor={'gray'}
            backgroundColor={'black'}
         
         >
             <Tab.Screen name="Feed" component={Feed}/>
             <Tab.Screen name="CreatePost" component={CreatePost}/>

        </Tab.Navigator>
    )

}
const styles = StyleSheet.create({
    bottomTabStyle: {
      backgroundColor:"black",
      height: "8%",
     //borderTopLeftRadius: 30,
      //borderTopRightRadius: 30,
      overflow: "hidden",
      position: "absolute",
      
    }
  });
export default BottamTabNavigator