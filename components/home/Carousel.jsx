import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://github.com/eddyog/shoes_company/blob/main/shoes/x.png?raw=true",
    "https://github.com/eddyog/shoes_company/blob/main/shoes/b.png?raw=true",
    "https://github.com/eddyog/shoes_company/blob/main/shoes/jordan.png?raw=true",
    
    
  ]

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        InactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  )
}

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
})
