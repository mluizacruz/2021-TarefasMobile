import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro app mobile RN - Maria Luiza</Text>
      <Button title="Já sei construir mobile app"> </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
