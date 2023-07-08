import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <StatusBar style="light" />
      <TouchableOpacity>
        <Text style={styles.btnText}>123</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText}>456</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
    color: theme.grey,
  },
});