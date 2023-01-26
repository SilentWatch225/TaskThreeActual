import { BackgroundColor } from 'jest-util/node_modules/chalk';
import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function MyButton ({title, onPress, underColor, textCol, borderColor}){
    return(
        <TouchableHighlight
        onPress = {onPress}
        textShadowColor = {textCol}
        underlayColor = {underColor}

        style = {[styles.button, {backgroundColor: borderColor}]}>
        <Text style = {styles.text}> {title}</Text>


        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:{
        height: 40,
        width: 100,
        margin: 10,
        padding: 5,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default MyButton;