import {Animated} from 'react-native'

export function springFadeIn() {
    const transitionSpec = {
        timing: Animated.spring,
        tension: 30,
        useNativeDriver: true
    }

    return {
        transitionSpec,
        screenInterpolar: ({position, scene}) => {
            const {index} = scene

            const opacity = position.interpolate({
                inputRange: [index - 1, index],
                outputRange: [0, 1]
            })

            return {opacity}
        }
    }
}