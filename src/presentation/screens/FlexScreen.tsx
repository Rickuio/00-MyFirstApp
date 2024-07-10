import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const FlexScreen = () => {
  return (
    <View style={ styles.container } >
        <View style={ styles.box1 } />
        <View style={ styles.box2 } />
        <View style={ styles.box3 } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    box1: {
        flex: 10,
        backgroundColor: '#5856D6'
    },
    box2: {
        flex: 20,
        backgroundColor: '#474599'
    },
    box3: {
        flex: 30,
        backgroundColor: '#262562'
    }
})
