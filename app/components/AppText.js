import React from 'react';
import { Text } from "react-native";
import defaultStyles from "../config/styles";

//encapsulate styles in a custom component
function AppText(props) {
  const { children, style } = props;
  return (
    <Text style={ [defaultStyles.text, style] }>{ children }</Text>
  );
}


export default AppText;