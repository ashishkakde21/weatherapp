// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function Weather({ weather, dateBuilder }) {
// //   return (
// //     <View style={styles.main}>
// //       <View style={styles.location}>
// //         <Text style={styles.city}>{weather.name}, {weather.sys.country}</Text>
// //         <Text
// //          style={styles.date}>{dateBuilder(new Date())}</Text>
// //       </View>
// //       <View style={styles.current}>
// //         <Text style={styles.temp}>{Math.round(weather.main.temp)}°c</Text>
// //         <Text style={styles.weather}>{weather.weather[0].main}</Text>
// //         <Text style={styles.hiLow}>{Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°c</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   main: {
// //     flex: 1,
// //     padding: 25,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   location: {
// //     marginBottom: 20,
// //   },
// //   city: {
// //     color: '#fff',
// //     fontSize: 32,
// //     fontWeight: '500',
// //   },
// //   date: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   current: {
// //     alignItems: 'center',
// //   },
// //   temp: {
// //     color: '#fff',
// //     fontSize: 102,
// //     fontWeight: '900',
// //     marginVertical: 30,
// //     textShadow: '2px 10px rgba(0, 0, 0, 0.6)',
// //   },
// //   weather: {
// //     color: '#fff',
// //     fontSize: 32,
// //     fontWeight: '700',
// //     fontStyle: 'italic',
// //     marginBottom: 15,
// //     textShadow: '0px 3px rgba(0, 0, 0, 0.4)',
// //   },
// //   hiLow: {
// //     color: '#fff',
// //     fontSize: 24,
// //     fontWeight: '500',
// //     textShadow: '0px 4px rgba(0, 0, 0, 0.4)',
// //   },
// // });

// // Weather.js







// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// export default function Weather({ weather, dateBuilder }) {
//   let weatherGif;

//   // Determine which GIF to display based on weather condition
//   if (weather.weather[Below0].main === 'Snow') {
//     weatherGif = require('../assets/snow.gif');
//   } else if (weather.weather[Above0].main === 'Rain') {
//     weatherGif = require('../assets/rain.gif');
//   } else {
//     weatherGif = require('../assets/cloudy.gif');
//   }

//   return (
//     <View style={styles.main}>
//       <View style={styles.location}>
//         <Text style={styles.city}>{weather.name}, {weather.sys.country}</Text>
//         <Text style={styles.date}>{dateBuilder(new Date())}</Text>
//       </View>
//     <Image source={weatherGif} style={styles.weatherGif} />
//       <View style={styles.current}>
//         <Text style={styles.temp}>{Math.round(weather.main.temp)}°c</Text>
//         <Text style={styles.weather}>{weather.weather[0].main}</Text>
//         <Text style={styles.hiLow}>{Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°c</Text>
//     </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     padding: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   location: {
//     marginBottom: 20,
//   },
//   city: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: '500',
//   },
//   date: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   current: {
//     alignItems: 'center',
//   },
//   temp: {
//     color: '#fff',
//     fontSize: 102,
//     fontWeight: '900',
//     marginVertical: 30,
//     textShadow: '2px 10px rgba(0, 0, 0, 0.6)',
//   },
//   weather: {
//     color: '#fff',
//     fontSize: 32,
//     fontWeight: '700',
//     fontStyle: 'italic',
//     marginBottom: 15,
//     textShadow: '0px 3px rgba(0, 0, 0, 0.4)',
//   },
//   hiLow: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '500',
//     textShadow: '0px 4px rgba(0, 0, 0, 0.4)',
//   },
//   weatherGif: {
//     width: 200,
//     height: 200,
//     marginTop: 20,
//     resizeMode: 'contain', // Adjust the resizeMode as needed
//     borderRadius:40,
//   },
// });


import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Weather({ weather, dateBuilder }) {
  let weatherGif;

  // Determine which GIF to display based on temperature
  const temperature = Math.round(weather.main.temp);
  if (temperature < 0) {
    weatherGif = require('../assets/snow.gif');
  } else if (temperature < 0) {
    weatherGif = require('../assets/cloudy.gif');
  } else {
    weatherGif = require('../assets/cloudy.gif');
  }

  return (
    <View style={styles.main}>
      <View style={styles.location}>
        <Text style={styles.city}>{weather.name}, {weather.sys.country}</Text>
        <Text style={styles.date}>{dateBuilder(new Date())}</Text>
      </View>
      <Image source={weatherGif} style={styles.weatherGif} />
      <View style={styles.current}>
        <Text style={styles.temp}>{temperature}°c</Text>
        <Text style={styles.weather}>{weather.weather[0].main}</Text>
        <Text style={styles.hiLow}>{Math.round(weather.main.temp_min)}°c / {Math.round(weather.main.temp_max)}°c</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    marginBottom: 20,
  },
  city: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '500',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  current: {
    alignItems: 'center',
  },
  temp: {
    color: '#fff',
    fontSize: 102,
    fontWeight: '900',
    marginVertical: 30,
    textShadow: '2px 10px rgba(0, 0, 0, 0.6)',
  },
  weather: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    marginBottom: 15,
    textShadow: '0px 3px rgba(0, 0, 0, 0.4)',
  },
  hiLow: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textShadow: '0px 4px rgba(0, 0, 0, 0.4)',
  },
  weatherGif: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain', // Adjust the resizeMode as needed
    borderRadius: 40,
  },
});
