import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

//const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {
  
  const { width, height } = useWindowDimensions()

  return (
    <View>
        <View style={ styles.container }>
            
            <View style={{
                ...styles.purpleBox,
                width: width*0.5
            }} />
        
        </View>
        <Text style={ styles.title }>w: { width }, h: { height }</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 300,
        width: 300
        //width: '100%'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        color: 'white'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})
