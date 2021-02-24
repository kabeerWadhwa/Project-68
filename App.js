import * as React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import BookTransactionScreen from './screens/BookTransactionScreen'
import SearchScreen from './screens/SearchScreen'
import fb from './screens/fb'
import insta from './screens/insta'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
BookTransaction:{screen:BookTransactionScreen},
Search:{screen:SearchScreen},
Facebook:{screen:fb},
Instagram:{screen:insta}
})
const AppContainer = createAppContainer(TabNavigator)