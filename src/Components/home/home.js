import React, {Component} from 'react';
import {StyleSheet, View,Alert, Image,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Container, Content, Header, Button, Text,  Body, Icon, Left,Right,ScrollView} from 'native-base';
import HomepageScreen from '../Page/HomepageScreen';
import {    createDrawerNavigator, DrawerItems} from 'react-navigation-drawer'; 
import { createSwitchNavigator,   createAppContainer  } from 'react-navigation'; 
const CustomeDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height:50,backgroundColor:'#FFF'}} >
      <Body style={styles.drawerContainer}>
        <View><Text style={styles.drawerContainerwelcometext}>Menu</Text></View>
      </Body>
    </Header>
    <Content>
    <DrawerItems {...props}/>
    </Content>
   
    <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap-reverse',
        borderTopWidth:1,
        borderTopColor:'#CCC',
        marginBottom:10
      }}>
    <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'} onPress={() => this.props.navigation.navigate('Home')}>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
            <Text style={{fontSize:12}}>© Copyright 2020 All rights reserved </Text>
        </View>
    </TouchableHighlight>
    </View>
    </Container>
)

class Hidden extends React.Component {
  render() {
    return null;
  }
}
const AppDrawerNavigator = createDrawerNavigator(
 {  
     Home : {  screen: HomepageScreen     },
  },
  {
    drawerType:'slide',
    drawerPosition:'right',
    drawerBackgroundColor:'black',
    initialRouteName: 'Home',
    contentComponent: CustomeDrawerContentComponent,
    drawerBackgroundColor: 'transparent',
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    contentOptions:{
      activeTintColor:'tomato'
    }
  },{
    contentComponent: props => <NonTeachingMenu {...props} />,
  },);  




const AppSwitchNavigator = createSwitchNavigator({  
  Dashboard: { screen: AppDrawerNavigator },  

});  

  
const AppContainer = createAppContainer(AppSwitchNavigator);  

export default class Login extends Component {

	constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
render() {
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        justifyContent:'center',
        alignContent:'center'
      },
    text:{
      fontSize:18,
      color:'#000',
      fontWeight:'bold'
  
    },
    welcome:{
      fontSize:24,
      color:'#000',
      alignSelf:'center'
    },
    
    textTitle:{
      fontSize:18,
      color:'tomato',
      fontWeight:'bold',
      alignSelf:'center'
    },
  });
  
return (
    <Container style={styles.container}>
        <View style={{marginBottom:100}} >
          <Text style={styles.welcome}>HelloApp</Text>
        </View>
        <View >
          <Image style={{alignSelf:'center', marginBottom:15}} source={require('../../assets/img/language_icon.png')}/>
          <Text style={styles.textTitle}>Choose Language</Text>
        </View>
        <View style={{alignContent:'center', justifyContent:'space-between'}}>
        <View style={{justifyContent: 'space-around',alignItems: 'center',alignContent: 'center', flexDirection:'row', marginTop:30}}>
        <View style={{marginLeft:'20%'}}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}  >
          <Text style={styles.text}>English</Text>
          </TouchableHighlight>
        </View>
        <View style={{marginRight:'20%'}}  >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}  >
            <Text style={styles.text} >Hindi</Text>
          </TouchableHighlight>
        </View>
      </View>
        </View>
        </Container>
);
}
}


const styles = StyleSheet.create({

  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  drawerContainerwelcometext:{
  	margin: 10,
    fontSize: 18,
    color:'#222'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#fff',
      borderRadius:5,
      borderBottomWidth: 1,
      width:320,
      height:55,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:30,
    width:300,
    borderRadius:5,
  },

   buttonSignUpContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    width:300,
    borderRadius:5,
  },

  
  buttonForgotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    fontSize:10
  },
   buttonRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:300,
    borderRadius:5,
  },


  
  loginButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  forgotText: {
  	fontSize: 10
  },
  OrText: {
  	fontSize: 16
  },
  welcometext:{
  	marginBottom: 10,
  	fontSize: 20,
  }
  
});
 
