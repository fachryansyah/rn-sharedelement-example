import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ScrollView,
  Animated,
  Easing
} from 'react-native'

import { SharedElement } from 'react-navigation-shared-element'

class DetailScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      animToUp: new Animated.Value(400)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.animToUp,
      {
        toValue: 0,
        duration: 1700,
        easing: Easing.bezier(0.70, 0.3, 0.10 , 1),
        useNativeDriver: true
      }
    ).start();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'NO ITEM')

    return (
      <>
        <View>
          <ScrollView>
            <SharedElement id={`cover.${item.id}`}>
              <Image style={styles.imageCover} source={{ uri: item.cover }} />
            </SharedElement>
            <Animated.View style={[styles.card, { transform: [{translateY: this.state.animToUp}] } ]}>
              <Text style={styles.textSerial}>{item.serial}</Text>
              <Text style={styles.textChara}>{item.title}</Text>
              <Text style={styles.textSubTitle}>Pengisi suara: {item.dubber}</Text>
              <Text style={styles.textSubTitle}>Diperankan oleh: Suzu Hirose</Text>
              <Text style={styles.textHeader}>Description: </Text>
              <Text style={styles.textDescription}>
                {item.description}
              </Text>
            </Animated.View>
          </ScrollView>
        </View>
      </>
    )
  }
}

DetailScreen.sharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item')
  return [
    { id: `cover.${item.id}` },
    { id: `text.${item.id}` }
  ]
}

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  imageCover: {
    resizeMode: 'cover',
    height: SCREEN_HEIGHT / 2,
  },
  card: {
    backgroundColor: 'white',
    padding: 26,
    paddingTop: 46,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    width: SCREEN_WIDTH,
    top: -26,
  },
  textChara: {
    fontSize: 28,
    fontWeight: '700',
    color: '#353535'
  },
  textSerial: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: '700',
    color: '#7e7f7c'
  },
  textSubTitle: {
    fontSize: 16,
    color: '#212121'
  },
  textHeader: {
    fontSize: 24,
    marginTop: 28,
    fontWeight: '700',
    color: '#353535'
  },
  textDescription: {
    fontSize: 16,
    color: '#212121'
  }

})

export default DetailScreen