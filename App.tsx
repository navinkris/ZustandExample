import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Counter from './src/Counter';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;