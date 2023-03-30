import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { OptionsContext } from "@options";
import { ImageBackground, SafeAreaView, ScrollView, View, Text, TouchableOpacity } from "react-native";
import AzureAuth from "react-native-azure-auth";

function AzureADAuth(params) {
  const {
    navigation
  } = params;
  const options = useContext(OptionsContext);
  const {
    styles,
    azureTenant,
    azureClientId,
    azureRedirectUri
  } = options;
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const fetchData = async navigation => {
    const azureAuth = new AzureAuth({
      tenant: azureTenant,
      clientId: azureClientId,
      redirectUri: azureRedirectUri
    });

    try {
      const tokens = await azureAuth.webAuth.authorize({
        scope: "openid profile User.Read",
        prompt: "login"
      });
      setAccessToken(JSON.stringify(tokens));
      const info = await azureAuth.auth.msGraphRequest({
        token: tokens.accessToken,
        path: "/me"
      });
      setUser(JSON.stringify(info, null, 2));
      setTimeout(() => {
        navigation.navigate("Untitled5");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return <SafeAreaView style={styles?.safeArea}>
      <View style={styles?.MVfceqLO}>

          <View style={styles?.header}>
            <ImageBackground style={styles?.headerImage} source={require("./assets/komatsu-logo.png")} resizeMode="cover"></ImageBackground>
          </View>

          <View style={styles?.section}>
            <Text style={styles?.headerText}>My Komatsu</Text>
            <Text style={styles?.sectionText}>Welcome to your personalized experience</Text>
          </View>
          <View style={styles?.sectionContent}>
            <ImageBackground style={styles?.sectionImage} source={require("./assets/hero_pc_en.jpg")} resizeMode="cover"></ImageBackground>
            <ImageBackground style={styles?.sectionImage2} source={require("./assets/02.jpeg")} resizeMode="cover"></ImageBackground>
          </View>
          
          <TouchableOpacity style={styles?.button} onPress={() => {
        fetchData(navigation);
      }}>
            <Text style={styles?.DjHOfaku}>Login with Azure AD</Text>
          </TouchableOpacity>

          <ScrollView style={[styles?.consoleResponseSection, _styles.fdfHasbd]}>
            <Text style={styles?.consoleText}>{user}</Text>
            <Text style={styles?.consoleText}>{accessToken}</Text>
          </ScrollView>
      </View>
    </SafeAreaView>;
}

export default {
  title: "Azure Ad Auth",
  navigator: AzureADAuth
};

const _styles = StyleSheet.create({
  fdfHasbd: {
    backgroundColor: "#fff"
  }
});