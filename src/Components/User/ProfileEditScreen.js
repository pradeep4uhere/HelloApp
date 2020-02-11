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

export default class ProfileEditScreen extends Component {  
  static navigationOptions = {  
       title:'Home',
       drawerIcon:(tintColor) => (
           <Icon name="home"/>
       )
  };  
  render() {  
    let data = [{value: 'Mr.',}, {value: 'Mrs.',}, {value: 'Miss',}];
        let day = [{
            value: '1',
          }, {
            value: '2',
          }, {
            value: '3',
          }, {
            value: '4',
          }, {
            value: '5',
          }, {
            value: '5',
          }, {
            value: '7',
          }, {
            value: '8',
          }, {
            value: '9',
          }, {
            value: '10',
          }, {
            value: '11',
          }, {
            value: '12',
          }, {
            value: '13',
          }, {
            value: '14',
          }, {
            value: '15',
          }, {
            value: '16',
          }, {
            value: '17',
          }, {
            value: '18',
          }, {
            value: '19',
          }, {
            value: '20',
          }, {
            value: '21',
          }, {
            value: '22',
          }, {
            value: '23',
          }, {
            value: '24',
          }, {
            value: '25',
          }, {
            value: '26',
          }, {
            value: '27',
          }, {
            value: '28',
          }, {
            value: '29',
          }, {
            value: '30',
          }, {
            value: '31',
          }];
          let month = [{
            value: '01',
          }, {
            value: '02',
          }, {
            value: '03',
          }, {
            value: '04',
          }, {
            value: '05',
          }, {
            value: '06',
          }, {
            value: '07',
          }, {
            value: '08',
          }, {
            value: '09',
          }, {
            value: '10',
          }, {
            value: '11',
          }, {
            value: '12',
          }];
          let year = [{
            value: '2000',
          }, {
            value: '2001',
          }, {
            value: '2003',
          }];
      return (  
        <Container>
        <Header >
          <Left>
            <IconFA style={{color:'#FFF'}} name="arrow-left" onPress={() => this.props.navigation.navigate('Home')}  />
          </Left>
          <Body>
            <Text style={{color:'#FFF'}}>Profile Update</Text>  
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
            </View>
            <View  style={{
                flex: 1,
                padding:15,

              }}>
            <ScrollView>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
            <Dropdown
                label='Chosoe Title'
                data={data}
                containerStyle={styles.DropdownBox}
            />
            </View>
            
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4'}}>Title</Text>
                <Text style={{alignSelf:'flex-end'}}>Mr.</Text>
              </View>
            </View>
            <View style={styles.viewTabRow}>
            <View style={styles.leftBox} >
               <Text style={{fontSize:12, alignSelf:'center'}}>First Name</Text>
               <Text style={{fontSize:12, alignSelf:'center'}}>Pradeep</Text>
              </View>
            
              <View style={styles.rightBox}>
              <Text style={{fontSize:12, alignSelf:'center'}}>Last Name</Text>
               <Text style={{fontSize:12, alignSelf:'center'}}>Kumar</Text>
              </View>
            </View>
            <View style={styles.viewTabRow}>
            <View style={{justifyContent:'space-around', flexDirection:'row'}} >
            <View style={{width:75}}>
                <Dropdown  data={day} value={24} containerStyle={{width:50}}/>
            </View>
            <View style={{width:75}}>
            <Dropdown data={month} value={8} containerStyle={{width:50}}/>
            </View>
            <View style={{width:75}}>
            <Dropdown data={year} value={200} containerStyle={{width:75}}/>
            </View>
            </View>
              <View style={styles.rightBox}>
                <Text style={{alignSelf:'flex-end', fontSize:13, color:'#517fa4', paddingRight:35}}>Date Of Birth</Text>
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
    width:150,
    paddingBottom:10
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
 