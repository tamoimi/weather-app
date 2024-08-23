import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
// ===================================================================================================================
// get screen width : dimensions
// ===================================================================================================================
const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* bar */}
      <StatusBar style="light" />
      {/* city */}
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      {/* weather */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.weather}>
          {/* date */}
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View style={styles.weather}>
          {/* date */}
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
        <View style={styles.weather}>
          {/* date */}
          <View style={styles.day}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cornflowerblue",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
  },
  description: {
    fontSize: 60,
    marginTop: -30,
  },
});
