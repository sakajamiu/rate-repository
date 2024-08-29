import  { View, StyleSheet, Image} from 'react-native'
import Text from './Text'

const style = StyleSheet.create({
   
    container:{
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    logo:{
        width: 80,
        height:80,
        borderRadius: 5,
    },
    div1:{
        display: 'flex',
        flexDirection: 'row',
        gap: 10
        
    },
    div2:{
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        padding:20,
        
    },
    content: {
        
        color:'white',
        padding:5,
        borderRadius: 5,
    },
    text:{
         textAlign: 'center'
    }
})

const ItemCard = ({count, label}) => {
    return(
        <View>
            <Text fontSize='subheading' fontWeight='bold' style={style.text}>{count}</Text>
            <Text color="textSecondary" fontWeight='bold'>{label}</Text>
        </View>
    )
}

const itemItem = ({item}) => {
    return(
<View style={style.container}>
    <View style={style.div1}>
        <View>
            <Image style={style.logo} source={{uri:item.ownerAvatarUrl}}resizeMode='cover'/>
        </View>
        <View>
        <Text fontWeight="bold" fontSize="subheading"  >  {item.fullName}</Text>
    <Text color="textSecondary" > {item.description}</Text>
    
    <Text style={{padding:20}}>
    <Text  backGroundColor='primary' style={style.content}> {item.language}</Text>
    </Text>
   
        </View>
    </View>
   <View style={style.div2}>
    <ItemCard
     count={`${(Number(item.stargazersCount)/1000).toFixed(1)}K` }
     label="Stars"
     />
     <ItemCard
     count={`${(Number(item.forksCount)/1000).toFixed(1)}K` }
     label="Forks"
     />
     
     <ItemCard
     count={item.reviewCount }
     label="Reviews"
     />
     <ItemCard
     count={item.ratingAverage }
     label="Rating"
     />

   </View>
</View>
    )
}
export default itemItem