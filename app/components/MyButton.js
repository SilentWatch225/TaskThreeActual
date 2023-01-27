import { BackgroundColor } from 'jest-util/node_modules/chalk';
import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function MyButton ({title, onPress, underColor, textCol, borderCol, backCol}){
    return(
        <TouchableHighlight
        onPress = {onPress}
        style = {[styles.text, {textColor: textCol}]}
        underlayColor = {underColor}
        style = {[styles.button, {borderColor: borderCol}]}
        style = {[styles.button, {backgroundColor: backCol}]}>
        <Text style = {styles.text}> {title}</Text>

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
        fontWeight: 'bold',
    },
})

export default MyButton;