import React from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from '../config/colors';

function ListItem(props) {
  const { title, subTitle, image, IconComponent, onPress, renderRightActions } = props;
  return (
    <Swipeable renderRightActions={ renderRightActions }>
      <TouchableHighlight
        underlayColor={ colors.light }
        onPress={ onPress }
      >
        <View style={ styles.container }>
          { IconComponent }
          { image && <Image style={ styles.image } source={ image } /> }
          <View style={ styles.detailsContainer }>
            <AppText style={ styles.title }>{ title }</AppText>
            { subTitle && <AppText style={ styles.subTitle }>{ subTitle }</AppText> }
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    borderRadius: 35,
    width: 70,
    height: 70,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  }
})

export default ListItem;