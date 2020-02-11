import React, {Component} from 'react';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-material-dropdown';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
import { Container, Header, Content, Button, Text, Icon, Left, Body, Right,  Title, Form, Item,   Label } from 'native-base';
import { CheckBox, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class WelcomeScreen extends Component {  
  static navigationOptions = {  
       title:'Home',
       drawerIcon:(tintColor) => (
           <Icon name="home"/>
       )
  };  
  render() {  
    let data = [{
          value: 'Mr.',
        }, {
          value: 'Mrs.',
        }, {
          value: 'Miss',
        }];
      return (  
        <Container>
        <Header >
          <Left>
            <Icon style={{color:'#FFF'}} name="menu" onPress={() => this.props.navigation.openDrawer()}  />
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>Profile</Text>  
          </Body>
          <Right>
          <Icon style={{color:'#FFF', }} name="cart" onPress={() => this.props.navigation.openDrawer()}  />
          <Icon style={{color:'#FFF',marginLeft:15}} name="settings" onPress={() => this.props.navigation.openDrawer()}  />
          <Icon style={{color:'#FFF',marginLeft:15}} name="person" onPress={() => this.props.navigation.openDrawer()}  />
          </Right>
        </Header>
        <Body style={styles.drawerContainer}>
            <View style={{flex:1}}>
              <Image source={require('../../assets/img/user-profile.jpg')} style={{height:'100%', width:400}}/>
              <IconFA name="pen" style={{marginTop:'-10%', marginLeft:10}} color='#517fa4' size={16}/>   
              {/* <Dropdown
                  label='Chosoe Title'
                  data={data}
                  containerStyle={styles.DropdownBox}
                /> */}
            </View>
            <View  style={{
                flex: 1,
                padding:15,

              }}>
            <ScrollView>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
                <IconFA name="angle-down" type='ionicon' color='#517fa4' size={18} style={{alignSelf:'auto'}} onPress={() => this.props.navigation.navigate('ProfileScreen')}   />
                
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Title</Text>
                <Text style={{alignSelf:'flex-end'}}>Mr.</Text>
              </View>
            </View>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
                <IconFA name="pen" color='#517fa4' size={12}/>
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Name</Text>
                <Text style={{alignSelf:'flex-end'}}>Pradeep Kumar</Text>
              </View>
            </View>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
                <IconFA name="calendar" color='#517fa4' size={18}/>
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Date Of Birth</Text>
                <Text style={{alignSelf:'flex-end'}}>07/03/1984</Text>
              </View>
            </View>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
                <IconFA name="angle-down" type='ionicon' color='#517fa4' size={18}/>
               
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Select</Text>
                <Text style={{alignSelf:'flex-end'}}>Options Value</Text>
              </View>
            </View>
        
            
            <View style={styles.viewTabRowDivider}>
            <View style={styles.leftBox} >
               <IconFA name="angle-down" type='ionicon' color='#517fa4' size={18}/>
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Gender</Text>
                <Text style={{alignSelf:'flex-end'}}>Male</Text>
              </View>
            </View>
            <View style={styles.viewTabRowAfterDivider}>
            <View style={styles.leftBox} >
               
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:16, color:'#517fa4'}}>Title</Text>
              </View>
            </View>
            <View style={styles.viewTabRowAfterDivider}>
              <View style={styles.leftBox} >
               
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:16}}>Title</Text>
              </View>
            </View>
            <View style={styles.viewTabRowAfterDivider}>
              <View style={styles.leftBox} >
               
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:16}}>Title</Text>
              </View>
            </View>
            <View style={styles.viewTabRowAfterDivider}>
              <View style={styles.leftBox} >
               
              </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:16}}>Title</Text>
              </View>
            </View>

            </ScrollView>
              </View>
             
          </Body>
        </Container>
      );  
  }  
}  


const styles = StyleSheet.create({
  viewTabRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'#CCC',
    borderBottomWidth:0.5,
    marginBottom:10
  },
  viewTabRowDivider:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'#517fa4',
    borderBottomWidth:2,
    marginBottom:10
  },
  viewTabRowAfterDivider:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'#FFF',
    borderBottomWidth:0,
    marginBottom:10
  },
  
  DropdownBox:{
    marginLeft:30,
    marginTop:20,
    width:150
  },
  rightBox:{
    width: '50%',
    height: 50,
    paddingRight:15
  },
  leftBox:{
    width: '50%',
    height: 50, 
   },
  
});
 