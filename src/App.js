
// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
// import Weather from './weather';
// import apiKey from './key';

// const api = {
//   key: apiKey,
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// export default function WeatherApp() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState(null);

//   const search = () => {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//       .then(response => response.json())
//       .then(result => {
//         setWeather(result);
//         setQuery('');
//       })
//       .catch(error => console.error(error));
//   }

//   const dateBuilder = (d) => {
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
//     const day = days[d.getDay()];
//     const date = d.getDate();
//     const month = months[d.getMonth()];
//     const year = d.getFullYear();
  
//     return `${day} ${date} ${month} ${year}`;
//   }

//   return (
//     <ImageBackground 
//       source={require('../assets/mount.jpg')}
//       style={styles.backgroundImage}
//       imageStyle={styles.backgroundImageStyle} // Apply image style here
//     >
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <TextInput
//             style={styles.input}
//             placeholder="Search for a city..."
//             onChangeText={text => setQuery(text)}
//             value={query}
//             onSubmitEditing={search}
//           />
//         </View>
//         {weather && <Weather weather={weather} dateBuilder={dateBuilder} />}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add opacity to background color
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     padding: 50,
//     width: '100%',
//     alignItems: 'center',
    
//   },
//   input: {
//     width: '100%',
//     maxWidth: 280,
//     padding: 10,
//     borderBottomWidth: 3,
//     borderColor: 'gray',
//     backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add opacity to input background color
//     borderRadius: 16,
//     fontSize: 20,
//     fontWeight: '300',
    
//   },
//   backgroundImageStyle: {
    
//     height:'110%',
//     width:'100%',
//     resizeMode: 'cover', 
//     backgroundColor: 'rgba(0, 0, 0, 0.3)', 
//   },
// });


// WeatherApp.js




import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Weather from './weather';
import apiKey from './key';

const api = {
  key: apiKey,
  base: "https://api.openweathermap.org/data/2.5/"
}

export default function WeatherApp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      })
      .catch(error => console.error(error));
  }

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <ImageBackground 
      source={require('../assets/mount.jpg')}
      style={styles.backgroundImage}
      imageStyle={styles.backgroundImageStyle} // Apply image style here
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder="Search for a city..."
            onChangeText={text => setQuery(text)}
            value={query}
            onSubmitEditing={search}
          />
        </View>
        {weather && <Weather weather={weather} dateBuilder={dateBuilder} />}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add opacity to background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 50,
    width: '100%',
    alignItems: 'center',
    
  },
  input: {
    width: '100%',
    maxWidth: 280,
    padding: 10,
    borderBottomWidth: 3,
    borderColor: 'gray',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Add opacity to input background color
    borderRadius: 16,
    fontSize: 20,
    fontWeight: '300',
    
  },
  backgroundImageStyle: {
    
    height:'110%',
    width:'100%',
    resizeMode: 'cover', 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
});
