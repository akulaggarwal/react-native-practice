/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ListView
} from 'react-native';

import MyScene from './MyScene';

class Greeting extends Component {
  render() {
    return(
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View>
        <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
        <ScrollView>
            <View style={{height: 300, backgroundColor: 'powderblue'}} />
            <View style={{height: 350, backgroundColor: 'skyblue'}} />
            <TextInput  placeholder="Type here"></TextInput>
            <View style={{flex: 1}}>
              <View style={{height: 50, backgroundColor: 'steelblue'}} />
              <Text style={{flex: 2}}>hey</Text>
            </View>
          </ScrollView>
        </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
