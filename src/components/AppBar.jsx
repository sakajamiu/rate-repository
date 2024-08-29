import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.AppBarBg.primary,
    height: 100,
    justifyContent: 'center',
   
    
    // ...
  },
  text: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    paddingLeft: 20,
   
    fontWeight: theme.fontWeights.bold,
  }
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable><Text style={ styles.text}>Repisotories</Text></Pressable></View>;
};

export default AppBar;