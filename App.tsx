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
          onStrokeStart={() => {
            console.log('Touch started - drawing began!');
          }}
          onStrokeChanged={() => {
            console.log('Stroke in progress...');
          }}
          onStrokeEnd={() => {
            console.log('Touch ended - stroke complete!');
          }}
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

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
