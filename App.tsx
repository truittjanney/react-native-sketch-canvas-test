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
      <Text style={styles.title}>Sketch Canvas</Text>
      <SketchCanvas
        containerStyle={styles.canvasContainer}
        canvasStyle={styles.canvas}
        defaultStrokeIndex={0}
        defaultStrokeWidth={5}
      />
    
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
  },
  canvasContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  canvas: {
    backgroundColor: 'lightblue',
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
