import React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={ 10 }
      style={ styles.background }
      source={ require("../assets/background.jpg") }
    >
      <View style={ styles.logoContainer }>
        <Image 
          source={ require("../assets/logo-red.png") }
          style={ styles.logo } 
        />
        <Text style={ styles.tagline }>Sell What You Don't Need</Text>
      </View>

      <View style={ styles.buttonsContainer }>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  }
})
export default WelcomeScreen;