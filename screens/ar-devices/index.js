import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const KomatsuLandingScreen = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#150A9A",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.fGCbgoZd}>
        <ImageBackground style={styles.BAuRCnCj} source={require("./assets/Wheel_Loader_WA500.png")} resizeMode="cover"></ImageBackground>
        <ImageBackground style={styles.eziaingY} source={require("./assets/komatsu-logo.png")} resizeMode="cover"></ImageBackground>
        <ImageBackground style={styles.BAuRCnCjw} source={require("./assets/bg.png")} resizeMode="cover"></ImageBackground>

        <Pressable onPress={() => {
        navigation.navigate("Azure Ad Auth");
      }} style={styles.VngTxYqJa}>
          <View style={styles.VngTxYqJ}>
            <Text style={styles.OLGmBJlN}>Get Started</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IuZHwZrj: {
    width: 347,
    height: 617,
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  BAuRCnCj: {
    width: 359,
    height: 286,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    top: 175.5
  },
  BAuRCnCjw: {
    width: 999,
    height: 286,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    top: 175.5,
    zIndex: -1,
    transform: [{
      rotate: '90deg'
    }]
  },
  eziaingY: {
    width: 192,
    height: 37,
    position: "absolute",
    top: 50,
    alignSelf: "center"
  },
  VngTxYqJa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  VngTxYqJ: {
    height: 48,
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    color: "#777777",
    bottom: 40,
    borderWidth: 2,
    borderColor: "#150A9A",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  OLGmBJlN: {
    lineHeight: 34,
    fontSize: 20,
    fontWeight: "700",
    color: "#150A9A",
    paddingLeft: 10,
    paddingRight: 10
  },
  fGCbgoZd: {}
});
export default KomatsuLandingScreen;