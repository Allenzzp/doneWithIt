import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';

function ListItem(props) {
  const { title, subTitle, image, onPress, renderRightActions } = props;
  return (
    <Swipeable renderRightActions={ renderRightActions }>
      <TouchableHighlight
        underlayColor={ colors.light }
        onPress={ onPress }
      >
        <View style={ styles.container }>
          <Image style={ styles.image } source={ image } />
          <View>
            <AppText style={ styles.title }>{ title }</AppText>
            <AppText style={ styles.subTitle }>{ subTitle }</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 10
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  }
})

export default ListItem;