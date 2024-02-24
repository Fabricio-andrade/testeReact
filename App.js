import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')
        }
      />
      
      <Text style={styles.headerText}>LOGIN</Text>
      <Text style={styles.headerText}>ABOUT US</Text>
    </View>
  )
}

const Main = () => {
  return (
    <View>
      <Image
        style={styles.mainImg}
        source={require('./assets/coffee.jpg')}
      />
      <Text>JOIN US</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '50px',
    margin: '20px',
    zIndex: 2,
  },
  headerText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: '35px',
    marginLeft: '35px',
    color: 'black'
  },
  logo: {
    width: 200,
    height: 60
  },
  mainImg: {
    width: 'auto',
    height: '90vh',
    resizeMode: 'cover'
  },
  mainText: {
    position: 'absolute',
    top: 50
  }
});
