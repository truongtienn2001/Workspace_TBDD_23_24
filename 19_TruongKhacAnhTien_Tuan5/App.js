import { StyleSheet, View } from 'react-native';
import Screen2a from './views/Screen2a';
import Screen2c from './views/Screen2c';


export default function App() {
  return (
    <View style={styles.container}>
      <Screen2a></Screen2a>
      <Screen2c></Screen2c>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
