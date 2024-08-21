import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

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
      <View style={styles.weather}>
        {/* date */}
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
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
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
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
