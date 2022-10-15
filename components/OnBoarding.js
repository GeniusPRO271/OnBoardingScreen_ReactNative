import {View, StyleSheet, FlatList, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS, slides} from './onBordaingData';
import OnBoardingItem from './onBoardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import BackButton from './BackButton';
import SkipButton from './SkipButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnBoarding({navigation}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollNext = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      try {
        await AsyncStorage.setItem('@viewedOnBoarding', 'true');
        navigation.navigate('HomeScreen');
      } catch (err) {
        console.log(err);
      }
    }
  };
  const scrollBack = () => {
    if (currentIndex > 0) {
      slidesRef.current.scrollToIndex({index: currentIndex - 1});
    } else {
      console.log('yo');
    }
  };
  const scrollSkip = () => {
    if (currentIndex === 0) {
      slidesRef.current.scrollToIndex({index: slides.length - 1});
    } else {
      console.log('yo');
    }
  };
  return (
    <View style={styles.BackgroundStyle}>
      <View style={styles.FlatListContainerStyle}>
        <FlatList
          data={slides}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <View style={styles.FooterContainerStyle}>
        {currentIndex === 0 ? (
          <SkipButton scrollSkip={scrollSkip} />
        ) : (
          <BackButton scrollBack={scrollBack} />
        )}
        <Paginator data={slides} scrollX={scrollX} />
        <NextButton scrollNext={scrollNext} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BackgroundStyle: {
    backgroundColor: COLORS.primary,
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FooterContainerStyle: {
    flexDirection: 'row',
  },
  FlatListContainerStyle: {
    flex: 3,
  },
});
