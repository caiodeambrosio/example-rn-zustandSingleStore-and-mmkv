import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useStore from './src/store';
import { counterActions } from './src/store/counter/slice';

function App(): JSX.Element {
  const counterState = useStore(x => x.counter);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#22262a" barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ZUSTAND SINGLE STORE + MMKV</Text>
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{counterState.total}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => counterActions.decrement(1)}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => counterActions.increment(1)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22262a',
    padding: 16,
    justifyContent: 'space-around',
  },
  titleContainer: {
    justifyContent: 'center',
  },
  title: {
    color: '#d6e1ef',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  displayContainer: {
    borderColor: '#d6e1ef',
    borderWidth: 4,
    borderRadius: 8,
    paddingVertical: 50,
  },
  displayText: {
    color: '#d6e1ef',
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#d6e1ef',
    borderRadius: 8,
    width: (Dimensions.get('screen').width - 32) / 2 - 8,
  },
  buttonText: {
    color: '#22262a',
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
