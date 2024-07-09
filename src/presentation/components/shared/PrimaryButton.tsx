import { Platform, Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPress }: Props ) => {
  return (
    <Pressable 
    style= { ({pressed}) => [
        styles.button,
        pressed && styles.buttonPressed
    ] }
    onPress={ () => onPress && onPress() } 
    onLongPress={ () => onLongPress && onLongPress() }
>
    <Text style={ styles.buttonText }> { label }</Text>
</Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : '#3b976b',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#EEE',
        fontSize: 20
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : '#2e654b' 
    }
})
