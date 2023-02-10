import * as React from 'react';
import {View, StyleSheet, } from 'react-native';

import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons'; 


function MyRoundIcon({borderRad, borderWid, borderCol}) {
  return (
      <View
        style = {styles.iconStyle}
        borderRadius = {borderRad}
        borderWidth = {borderWid}
        borderColor = {borderCol}
        >
            <AntDesign
                name="heart" 
                size={24} 
                color="red"
                />
      </View>
  );
}
const styles = StyleSheet.create({
    iconStyle: {
        backgroundColor: colors.primaryLight,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }
  })
  
export default MyRoundIcon;