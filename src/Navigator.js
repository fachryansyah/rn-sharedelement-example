import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'

import {springFadeIn} from './Transition/SpringFadeIn'

const sharedStackNavigator = createSharedElementStackNavigator(
    createStackNavigator,
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        transitionConfig: () => springFadeIn()
    }
)

export default createAppContainer(sharedStackNavigator)