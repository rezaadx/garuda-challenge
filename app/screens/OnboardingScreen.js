import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import AppCarousel from '../components/AppCarousel';
import routes from '../navigation/routes';

const data = [
  {
    title: "Invest for Future",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque penatibus et. Arcu cursus euismod quis viverra.",
    image: require("../assets/vector1.png")
  },
  {
    title: "Triple Your Funds",
    subtitle: "sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id",
    image: require("../assets/vector2.png")
  },
  {
    title: "Safe & Secure",
    subtitle: "et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique",
    image: require("../assets/vector3.png")
  },
]

function OnboardingScreen({ navigation }) {
  return (
    <Screen >
      <AppCarousel data={data} />
      <View style={styles.buttonContainer}>
        <View style={styles.newUserButton}>
          <AppButton title="create new wallet" color='white' backgroundColor='primary' uppercase onPress={() => navigation.navigate(routes.CREATE_PASSWORD)} />
        </View>
        <View style={styles.oldUserButton}>
          <AppButton title="I already have a wallet" color='primary' backgroundColor='white' uppercase onPress={() => navigation.navigate(routes.SECURITY_ACCESS)} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
    margin: 20,
    // backgroundColor:'gray',
  },
  newUserButton: {
    marginBottom: 10
  },
  oldUserButton: {

  }
})

export default OnboardingScreen;