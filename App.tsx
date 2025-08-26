import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import SketchCanvas from '@sourcetoad/react-native-sketch-canvas';

function App(): React.JSX.Element
{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sketch Canvas Test</Text>
      <View style={styles.canvasWrapper}>
        <SketchCanvas
          containerStyle={styles.canvasContainer}
          canvasStyle={styles.canvas}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
      />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  canvasWrapper: {
    flex: 1,
    height: 400,
    width: '100%',
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    minHeight: 300, // Ensure minimum height
  },
  canvas: {
    backgroundColor: 'lightblue',
    flex: 1, // Make sure canvas fills container
  },
});

export default App;
