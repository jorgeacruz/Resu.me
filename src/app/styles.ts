import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  perfil: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
  },
  button:{
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  
  logo:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
  },
  Slogan:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    paddingTop: 30,
  },
  textBold: {
    width: 255,
    color: "#fff",
    fontSize: 40,
    fontFamily: 'OpenSans_700Bold',
    lineHeight: 40,
    textAlign: 'left',
    marginTop: 20,
  },
  textLight: {
    color: "#fff",
    fontSize: 40,
    fontFamily: 'OpenSans_300Light',
    lineHeight: 50,
    textAlign: 'left',
    marginTop: 20,
    width: 255,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    width: 255,
    marginTop: 10,
    textAlign: 'center',
  },
  cta: {
    backgroundColor: "#FFBB00",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 255,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});