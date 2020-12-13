import React, {useRef} from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

import {useNavigation} from '@react-navigation/native';

import * as Styled from './styles';

const Home: React.FC = () => {
  const scrollx = useRef(new Animated.Value(0)).current;

  const bgs = ['#5D518A', '#3E3C7F', '#97399E', '#5E2C62'];

  const data = [
    {
      key: '3571572',
      title: 'Multi-lateral intermediate moratorium',
      description:
        "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
      image: 'https://i.imgur.com/wW5wwph.png',
    },
    {
      key: '3571747',
      title: 'Automated radical data-warehouse',
      description:
        'Use the optical SAS system, then you can navigate the auxiliary alarm!',
      image: 'https://i.imgur.com/k3jifpc.png',
    },
    {
      key: '3571680',
      title: 'Push Notifications',
      description:
        'Push notifications at their core are simply a way of alerting users to information that they have opted-in to from apps and services.',
      image: 'https://i.imgur.com/su121kp.png',
    },
    {
      key: '3571603',
      title: 'Monitored global data-warehouse',
      description: 'We need to program the open-source IB interface!',
      image: 'https://i.imgur.com/oOJ9Cjm.png',
    },
  ];

  const Indicator = ({scrollx}) => {
    return (
      <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const scale = scrollx.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = scrollx.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${index}`}
              style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: 'white',
                opacity,
                margin: 10,
                transform: [
                  {
                    scale,
                  },
                ],
              }}
            />
          );
        })}
      </View>
    );
  };

  const Backdrop = ({scrollx}) => {
    const backgroundColor = scrollx.interpolate({
      inputRange: bgs.map((bg, index) => index * width),
      outputRange: bgs.map((bg) => bg),
    });

    return (
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor,
          },
        ]}
      />
    );
  };

  const Square = ({scrollx}) => {
    const yolo = Animated.modulo(
      Animated.divide(
        Animated.modulo(scrollx, width),
        new Animated.Value(width),
      ),
      1,
    );

    const rotate = yolo.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['35deg', '0deg', '35deg'],
    });

    const translateX = yolo.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -height, 0],
    });

    return (
      <Animated.View
        style={{
          width: height,
          height: height,
          backgroundColor: '#fff',
          borderRadius: 86,
          position: 'absolute',
          top: -height * 0.63,
          left: -height * 0.3,
          transform: [
            {
              rotate,
            },
          ],
        }}
      />
    );
  };

  return (
    <>
      <Styled.Container>
        <StatusBar hidden />
        <Backdrop scrollx={scrollx} />
        <Square scrollx={scrollx} />
        <Animated.FlatList
          data={data}
          keyExtractor={(item) => item.key}
          horizontal
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollx}}}],
            {useNativeDriver: false},
          )}
          contentContainerStyle={{paddingBottom: 100}}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => {
            return (
              <View style={{width, alignItems: 'center'}}>
                <View
                  style={{
                    flex: 0.7,
                    justifyContent: 'center',
                    padding: 20,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: width / 1.4,
                      height: height / 2,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 15,
                  }}>
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 28,
                      marginBottom: 10,
                      color: 'white',
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'white', fontWeight: '300'}}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <Indicator scrollx={scrollx} />
      </Styled.Container>
    </>
  );
};

export default Home;
