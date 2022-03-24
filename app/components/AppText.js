import React from 'react';
import { Text, StyleSheet, Platform } from "react-native";

//encapsulate styles in a custom component
function AppText(props) {
  const { children, style } = props;
  return (
    <Text style={ [styles.text, style] }>{ children }</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    }),
  
  }
})

export default AppText;