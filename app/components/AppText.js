import React from 'react';
import { Text, StyleSheet, Platform } from "react-native";

//encapsulate styles in a custom component
function AppText(props) {
  return (
    <Text style={ styles.text }>{ props.children }</Text>
  );
}
const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
    fontSize: 18,
  }
})

export default AppText;