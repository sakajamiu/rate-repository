import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { Link} from 'react-router-native'
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
   <ScrollView horizontal contentContainerStyle={{alignItems:'center'}}>
     <Link to='/'><Text style={ styles.text} > Repisotories</Text></Link>
      <Link to='/signIn'><Text style={ styles.text} > Sign In</Text></Link>
   </ScrollView>
     
 
    </View>;
};

export default AppBar;