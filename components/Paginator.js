import {StyleSheet, View, Animated} from 'react-native';
import React from 'react';
import {COLORS, height, width} from './onBordaingData';

export default function Paginator({data, scrollX}) {
  return (
    <View style={styles.ContainerStyle}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.DotStyle, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {
    flexDirection: 'row',
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DotStyle: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 5,
  },
});
