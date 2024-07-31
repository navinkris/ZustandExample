import { useAtom } from 'jotai';
import React from 'react';
//import { useStore } from './Store';
import { countAtom } from './Store';
import { Button, StyleSheet, Text, View } from 'react-native';

const Counter: React.FC = () => {
  // const count = useStore((state) => state.count);
  // const increase = useStore((state) => state.increase);
  // const decrease = useStore((state) => state.decrease);

  const [count, setCount] = useAtom(countAtom);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
        {/* <Button title='Increase' onPress={increase} />
        <Button title='Decrease' onPress={decrease} /> */}
        <Button title='Increase' onPress={() => setCount(count+1)} />
        <Button title='Decrease' onPress={() => setCount(count-1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24, 
    marginBottom: 20
  }
});

export default Counter;