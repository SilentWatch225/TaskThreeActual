import * as React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import colors from '../config/colors';

function MyImage({borderWid, borderCol, borderRad}) {
  return (
    <Image
    style = {[styles.imageStyles, 
        {borderWidth: borderWid, borderColor: borderCol, borderRadius: borderRad}]} 
        >
    </Image>
  );
}
const styles = StyleSheet.create({
    imageStyles: {
        width:300, 
        height:300, 
        margin: 10,
    },
  })

export default MyImage;

