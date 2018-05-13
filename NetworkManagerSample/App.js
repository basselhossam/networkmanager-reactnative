/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  processColor,
  Switch,
  ScrollView
} from 'react-native';

var NetworkManager = require('networkmanager');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      runInBackGround: 'Disabled'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer} >
          <Text style={styles.details}>
            Hello {"Instabug's"} awesome user! The purpose of this application is to show you the different
            options for customizing the SDK and how easy it is to integrate it to your existing app
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>this.testGet()}>
            <Text style={styles.text}> testGet </Text>
          </TouchableOpacity>
          <View style={styles.switchView}>
            <Text style={styles.textSwitchStyle}>runInBackGround: {this.state.runInBackGround}</Text>
            <Switch
                onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}/>
          </View>
            { this.state.res }
        </ScrollView>
      </View>
    );
  }

  testGet() {
      NetworkManager.get("https://wrapit2018.herokuapp.com/getsummarizedarticles",{},function(success,error){
                         console.log("success",success);
                         console.log("error",error);
                         });
  }

  toggleSwitch = (value) => {
      this.setState({switchValue: value})
      NetworkManager.runInBackGround(value);
      if(value) {
        this.setState({runInBackGround: 'Enabled'});
      } else {
        this.setState({runInBackGround: 'Disabled'});
      }
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  details: {
    textAlign: 'center',
    color: '#333333',
    margin: 20,
    marginTop: Platform.OS === 'ios' ? 40 : 20
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 10,
    backgroundColor: "#1D82DC",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 10
  },
  textColor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonColor: {
    marginTop: 10,
    backgroundColor: "#1D82DC",
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5
  },
  textSwitchStyle: {
    marginTop: 10,
    marginRight: 5,
    fontWeight: 'bold'
  },
  switchView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  textInvoke: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 10
  }
});
