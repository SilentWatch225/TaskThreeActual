import * as React from 'react';
import {StyleSheet, Image, } from 'react-native';

function MyImage({link, borderWid, borderCol, borderRad}) {
  return (
    <Image
    style = {styles.imageStyles} 
    source = {{uri: link}}
    borderWidth = {borderWid}
    borderColor = {borderCol}
    borderRadius = {borderRad}
    />
  );
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 200, 
        height: 200, 
        margin: 10,
    },
  })

export default MyImage;

