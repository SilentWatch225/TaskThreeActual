import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function MyButton ({title, onPress, underColor, borderCol, backCol}){
    return(
        <TouchableHighlight
            onPress = {onPress}
            style = {[styles.button]}
            underlayColor = {underColor}
            borderColor = {borderCol}
            backgroundColor = {backCol}
        >
            <Text 
                style = {[styles.text]}> {title}
            </Text>

        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 40,
        width: 150,
        margin: 10,
        padding: 5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    text:{
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
})

export default MyButton;