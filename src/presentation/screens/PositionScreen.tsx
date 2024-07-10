
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View 
            style = { styles.totalBox }
        />
        <Text style={ styles.textBox }>Hola Mundo!</Text>
        <View 
            style = { styles.purpleBox }
        />
        <View 
            style = { styles.orangeBox }
        />
        <View 
            style = { styles.greenBox }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        //height: 150,
        //width: 300,
        backgroundColor: '#28C4D9',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 5,
        borderColor: '#EEEEEE',
        position: 'absolute',
        //position: 'relative',
        bottom: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 5,
        borderColor: '#EEEEEE',
        top: 0,
        right: 0,
        position: 'absolute'
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 5,
        borderColor: '#EEEEEE',
        bottom: 0,
        right: 0,
        position: 'absolute'
    },
    textBox: {
        justifyContent: 'center',
        backgroundColor: '#987ab1',
        borderWidth: 10,
        borderColor: 'white',
        color: '#28e7da',
        fontSize: 30,
        alignContent: 'center',
        position: 'absolute',
        bottom: 300,
        top: 300,
        left: 150,
        right: 150
    },
    totalBox: {
        backgroundColor: 'cyan',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
    }
})
