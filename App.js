import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Title from './src/components/Title/index_title';

import Form from './src/components/Form/index_form';

export default function App() {
  return (
    <View style= {main.container}>
      <Title/>
      <Form/>
    
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 50,
  },
});
