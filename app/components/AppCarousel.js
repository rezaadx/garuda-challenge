import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors'

const { width } = Dimensions.get('window')

function AppCarousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // to track flatlist index
  // must use useRef hook to prevent error
  // flatlist behavior throw error when changing viewabilityConfig and re-rendering
  // useRef prevent this error and prevent re-rendering
  const onViewRef = useRef(({changed}) => {
    if(changed[0].isViewable){
      setCurrentIndex(changed[0].index)
    }
  })

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        horizontal
        keyExtractor={item => item.title}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 95 }}
        />
      
      <View style={styles.dotContainer}>
        {data.map(({}, index) => 
          (
            <TouchableOpacity 
              style={[styles.dot, { backgroundColor : index === currentIndex ? colors.primary : colors.white }]} 
              key={index.toString()} 
              />
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent:'center',
    padding: 15,
    width,
  },
  carousel: {
    maxHeight: "100%",
  },
  container: {
    flex: 1,
  },
  dot: {
    borderColor: colors.lightGray,
    borderRadius: 50,
    borderWidth:1,
    height: 8,
    marginHorizontal: 5,
    width: 8,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center'
  }
})

export default AppCarousel;