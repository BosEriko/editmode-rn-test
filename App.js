import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Editmode, Chunk } from "editmode-react";

export default function App() {
  return (
    <View style={styles.container}>
      <Editmode projectId="prj_h3Gk3gFVMXbl">
        <Chunk identifier="cnk_2177d77492a2dead1585" />
        <StatusBar style="auto" />
      </Editmode>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
