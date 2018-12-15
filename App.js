/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios:
    'iOS と Android で表示の出し分けができそうです。\n' +
    'Cmd+R キーでリロードしたり、 Cmd+D キーでメニューを出したりできるとのこと。',
  android:
    'ここは Android 用なので、編集しても iOS では表示されなさそう。,\n' +
    'せっかくなのでスタイルシートもちょっと変えてみます。',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ここに地図を出したい</Text>
        <Text style={styles.instructions}>OpenStreetMapを使ってみたい</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
  },
  instructions: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'left',
    color: '#666666',
    marginHorizontal: 30,
    marginBottom: 30,
  },
});
