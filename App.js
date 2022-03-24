import React from "react";
import { View } from 'react-native'

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";


export default function App() {
  return (
    <View
      style={ {
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
        height: "100%"
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={ require("./app/assets/jacket.jpg") }
      />
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={ require("./app/assets/jacket.jpg") }
      />
    </View>
  );
}


