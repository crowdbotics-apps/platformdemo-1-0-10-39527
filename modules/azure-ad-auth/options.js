import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  headerImage: {
    width: 120,
    height: 23
  },
  MVfceqLO: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 0,
    color: "#777777"
  },
  header: {
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#150A9A"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#150A9A"
  },
  button: {
    backgroundColor: "#150A9A",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  consoleResponseSection: {
    flex: 1,
    backgroundColor: "#b3b3b3",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    maxHeight: 200
  },
  consoleText: {
    fontSize: 16,
    color: "#333333"
  },
  DjHOfaku: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700"
  },
  section: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#b3b3b3"
  },
  sectionImage: {
    width: "100%",
    height: 0,
    borderRadius: 5,
    marginTop: 10
  },
  sectionImage2: {
    width: "100%",
    height: 299,
    borderRadius: 5
  }
});

export default {
  title: "Azure Ad Auth",
  copy: "Routes available",
  styles: styles,
  azureTenant: "shahraizali10yahoo.onmicrosoft.com",
  azureClientId: "37515f77-xxxx-xxxx-xxxx-dcf8496d948c", // see Readme for more info
  azureRedirectUri: "com.shahrtestdemodev67931://com.shahrtestdemodev67931/android/callback" // see Readme for more info
};
