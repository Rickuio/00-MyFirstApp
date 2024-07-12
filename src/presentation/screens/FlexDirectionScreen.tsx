import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container } >
        <View style={ [styles.box, styles.box1] } />
        <View style={ [styles.box, styles.box2] } />
        <View style={ [styles.box, styles.box3] } />
        <View style={ [styles.box, styles.box4] } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cyan',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    box: {
        flex: 2,
        //width: 100,
        //height: 100
    },
    box1: {
        backgroundColor: '#5856D6',
        //top: -100
        flex: 3
    },
    box2: {
        backgroundColor: '#474599',
        flex: 2
    },
    box3: {
        backgroundColor: '#262562',
        flex: 1
    },
    box4: {
        backgroundColor: '#1a1a43',
    }
    
})
