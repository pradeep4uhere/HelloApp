import React, {Component} from 'react';
import { View,StyleSheet,Image, ImageBackground,SafeAreaView, ScrollView,TouchableHighlight} from 'react-native';
import { Container, Header, Content, Button, Text, Left, Body, Right, Icon, Title, Form, Item, Input, Label } from 'native-base';

export default class HomepageScreen extends Component {
    constructor(props) {
        super(props);
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
<Container>
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
          <Text style={styles.text}>English</Text>
        </View>
        <View style={{marginRight:'20%'}} onPress={() => this.props.navigation.navigate('Profile')} >
          <TouchableHighlight >
            <Text style={styles.text} >Hindi</Text>
          </TouchableHighlight>
        </View>
      </View>
        </View>
        </Container>
</Container>
);
}
}


