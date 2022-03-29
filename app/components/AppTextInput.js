import React from 'react';
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

function AppTextInput(props) {
  const { icon, ...otherProps } = props;
  return (
    <View style={ styles.container }>
      {icon && <MaterialCommunityIcons 
        name={ icon }
        size={ 25 }
        color={ colors.medium }
        style={ styles.icon}
      />}
      <TextInput style={ styles.textInput } {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
    color: colors.dark,
  },
  icon: {
    marginRight: 10
  }
})

export default AppTextInput;