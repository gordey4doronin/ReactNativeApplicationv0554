import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='test event' onPress={this.sendTestEvent}/>
        <Button title='test crash' onPress={this.sendTestCrash}/>
        <Button title='divide by 0 crash' onPress={this.sendTestCrashZero}/>
        <Button title='throw js error crash' onPress={this.sendTestCrashJS}/>
      </View>
    );
  }

  sendTestCrash = () => {
    Analytics.trackEvent("generating test crash");
    Crashes.generateTestCrash();
  }

  sendTestCrashZero = () => {
    Analytics.trackEvent("generating divide by zero crash");
    return 1 / 0;
  }

  sendTestCrashJS = () => {
    Analytics.trackEvent("generating js error crash");
    throw new Error('This is a test javascript crash!');
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
