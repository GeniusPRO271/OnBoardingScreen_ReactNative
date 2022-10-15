import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, height, width} from './onBordaingData';

export default function BackButton({scrollBack}) {
  return (
    <TouchableOpacity style={styles.ContainerStyle} onPress={scrollBack}>
      <Text style={styles.ButtonStyle}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {
    marginHorizontal: 20,
    justifyContent: 'center',
    width: width * 0.3,
    height: height * 0.1,
  },
  ButtonStyle: {
    color: COLORS.tertiary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
  },
});
