import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import * as Crashes from 'appcenter-crashes';
import * as Analytics from 'appcenter-analytics';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='test event' onPress={this.sendTestEvent}/>
        <Button title='test crash' onPress={this.sendTestCrash}/>
      </View>
    );
  }

  sendTestCrash = () => {
    Crashes.generateTestCrash();
  }

  sendTestEvent = () => {
    Analytics.trackEvent("test", {});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
