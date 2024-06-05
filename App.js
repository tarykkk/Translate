// import Translator from 'react-native-translator';
// import { useState } from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';

// const App = () => {
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');

//   return (
//     <View style={styles.container}>
//       <Translator
//         from="uk"
//         to="en"
//         value={value}
//         onTranslated={(t) => setResult(t)}
//       />
//       <TextInput value={value} onChangeText={(t) => setValue(t)} />
//       <Text>{result}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   }
// });


// export default App;


// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
// import Translator from 'react-native-translator';

// const App = () => {
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <Text style={styles.header}>TranslatorMobile</Text>
//       <Text style={styles.languageInfo}>Переклад з украинскої на англійську</Text>
      
//       <TextInput 
//         style={styles.input}
//         placeholder="Введите текст для перевода"
//         value={value}
//         onChangeText={(t) => setValue(t)} 
//       />
//       <Text style={styles.result}>{result}</Text>
//       <Translator
//         from="uk"
//         to="en"
//         value={value}
//         onTranslated={(t) => setResult(t)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     justifyContent: 'flex-start'
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   languageInfo: {
//     fontSize: 16,
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#666',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     fontSize: 18,
//     backgroundColor: '#fff',
//     marginBottom: 20,
//   },
//   button: {
//     height: 50,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   result: {
//     fontSize: 18,
//     color: '#333',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default App;

// Полуниця


import React from "react";
import Navigation from "./Navigation";

export default function App() {
  return (
    <Navigation />
  );
}