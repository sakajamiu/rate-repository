import Text from './Text';
import {useFormik} from 'formik'
import { TextInput, View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';


const initialValues={
    email: '',
    password: ''
}
const styles = StyleSheet.create({
    container:{
        padding: 15
    },
 input: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    height: 50,
    paddingHorizontal:10,
    color: theme.colors.textSecondary,
    marginTop: 10,
    borderRadius: 5
 },
 button:{
    
    backgroundColor: theme.colors.primary,
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
    borderRadius:5,
 },
 text:{
    color: 'white',
    textAlign:'center',
    
    fontSize: theme.fontSizes.subheading,
    paddingVertical: 20,

 }
})
const SignIn = () => {
    const SignInForm =({onSubmit}) => {
        const formik = useFormik({
            initialValues,
            onSubmit
        });
        return(
            
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='username' value={formik.values.email} onChangeText={formik.handleChange('email')}/>
                <TextInput style={styles.input} placeholder='password'  secureTextEntry value={formik.values.password} onChangeText={formik.handleChange('password')}/>
                <Pressable onPress={formik.handleSubmit}   style={styles.button}>
                    <Text style={styles.text}> Submit</Text>
                </Pressable>
            </View>
        )

    }
    const onSubmit =  values => {
        console.log(values)
    }

  return (
    <SignInForm onSubmit={onSubmit}/>
  )
};

export default SignIn;