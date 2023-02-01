import * as React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import colors from '../config/colors';

function MyImage({link, num, borderWid, borderCol, borderRad}) {
  return (
    <Image
    style = {styles.imageStyles} 
    source = {{uri: link}}
        />

  );
}


const styles = StyleSheet.create({
    imageStyles: {
        width: 200, 
        height: 200, 
        margin: 10,
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
    },
  })

export default MyImage;

