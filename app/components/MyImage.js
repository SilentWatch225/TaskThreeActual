import * as React from 'react';
import {View, StyleSheet, } from 'react-native';
import colors from '../config/colors';

function MyImage(resizeMo) {
  return (
    style = {[styles.imageStyles, {resizeMode: resizeMo}]}
  );
}
const styles = StyleSheet.create({
    imageStyles: {
        width:300, 
        height:300, 
        margin: 10,
        borderColor: 'black',
        borderWidth: 5
      },
  })

export default MyImage;
