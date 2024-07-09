import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/*<Text style={ styles.title }>BoxObjectModelScreen</Text>*/}
        <View style={ styles.purpleBox }>
            <Text style={ styles.textPurple }>Hola Mundo !! </Text>
        </View>
        <View style={ styles.purpleBox }></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        fontSize: 35,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderWidth: 10
    },
    purpleBox: {
        //flex: 1,
        height: 40,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 30,
        padding: 8
    },
    textPurple: {
        color: '#EEEEEE',
        fontSize: 18,
        fontFamily: 'Helvetica'
    }
})