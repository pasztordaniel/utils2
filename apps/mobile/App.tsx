/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {baseClass} from '@package/ui';

function App(): JSX.Element {
  return (
    <SafeAreaView className={baseClass}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" className="h-full">
        <View className="h-screen bg-slate-300 items-center justify-center space-y-3">
          <Text className="text-genoa-500 text-4xl font-bold">
            React Native
          </Text>
          <Text className="text-genoa-400 text-xl font-semibold">
            app works!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
