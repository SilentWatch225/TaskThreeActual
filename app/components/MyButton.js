import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function MyButton ({title, onPress, underColor, textCol, borderCol, backCol}){
    return(
        <TouchableHighlight
        onPress = {onPress}
        style = {[styles.button, 
        {borderColor: borderCol, backgroundColor: backCol}]}
        underlayColor = {underColor}
        >
        <Text style = {[styles.text, {color: textCol}]}> {title}</Text>

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