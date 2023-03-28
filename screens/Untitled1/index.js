import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.OEUtgBAb}><View style={styles.gPJJRprh}><Text style={styles.LaXfSBAb}>Lorem ipsum…</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#ffffff"
  },
  gPJJRprh: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  LaXfSBAb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  OEUtgBAb: {
    backgroundColor: "#ff0000",
    opacity: 1
  }
});
export default Untitled1;