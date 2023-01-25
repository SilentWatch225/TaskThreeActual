import { BackgroundColor } from 'jest-util/node_modules/chalk';
import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

function FirstComp ({title, onPress, underColor, textColor, borderColor}){
    return(
        <TouchableHighlight
        onPress = {onPress}
        color = {textColor}
        underlayColor = {underColor}

        style = {[styles.button, {backgroundColor: borderColor}]}
        


        </TouchableHighlight>
    );
}