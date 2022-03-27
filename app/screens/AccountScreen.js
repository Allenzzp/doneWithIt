import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  },
]

function AccountScreen(props) {
  return (
    <Screen style={ styles.screen }>
      <View style={ styles.container }>
        <ListItem
          title="Allen Zhao"
          subTitle="allendev@gmail.com"
          image={ require("../assets/mosh.jpg") }
        />
      </View>
      <View style={ styles.container }>
        <FlatList
          data={ menuItems }
          keyExtractor={ menuItem => menuItem.title }
          renderItem={ ({ item }) => 
            <ListItem
              title={ item.title }
              IconComponent={
                <Icon name={ item.icon.name } backgroundColor={ item.icon.backgroundColor } />
              }
            />
          }
          ItemSeparatorComponent={ ListItemSeparator }
        />
      </View>
      <ListItem 
        title="Logout"
        IconComponent={
          <Icon name="logout" backgroundColor='#ffe66d'/>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20,
  }
})

export default AccountScreen;