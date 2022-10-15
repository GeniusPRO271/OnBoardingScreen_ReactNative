import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {width, COLORS} from './onBordaingData';

const OnBoardingItem = ({item}) => {
  return (
    <View style={styles.BackgroundStyle}>
      <View style={styles.ImageContainerStyle}>
        <item.image width={width} height={280} />
      </View>
      <View style={styles.TextContainerStyle}>
        <Text style={styles.TitleStyle}>{item.title}</Text>
        <Text style={styles.SubTitleStyle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};
export default OnBoardingItem;

const styles = StyleSheet.create({
  BackgroundStyle: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: width,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyle: {
    color: COLORS.secondary,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  SubTitleStyle: {
    color: COLORS.tertiary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    width: width * 0.8,
    marginTop: 10,
    lineHeight: 27,
  },
  TextContainerStyle: {flex: 0.3, alignItems: 'center'},
  ImageContainerStyle: {marginBottom: 15},
});
