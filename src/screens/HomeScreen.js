import * as React from 'react';
import { View, Text, Image, FlatList, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const posts = [
    {id: 1, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile: require('../../assets/flower.jpg'), actif: 'True'},
    {id: 2, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'True'},
    {id: 3, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'True'},
    {id: 4, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'False'},
    {id: 5, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'True'},
    {id: 6, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'True'},
    {id: 7, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'True'},
    {id: 8, postOwner: 'Mohammed Boulija', ownerBio: "Infirmier Puériculteur Diplômé d'état", location: 'Rabat, Maroc', sourceImageProfile:  require('../../assets/flower.jpg'), actif: 'False'}

]

const Button = (props) => {
    const { onPress, title = 'Voir Profile' } = props;
    return (
      <Pressable style={{ 
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: 100,
        borderRadius: 4,
        backgroundColor: '#84c4c0',}} onPress={onPress}>
        <Text style={{
            fontSize: 14,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        }}>
            {title}
        </Text>
      </Pressable>
    );
  }
  

const PostItem = ({ item }) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginLeft: 0,
            marginTop: 1,
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E6E6E6',
            paddingBottom: 10,
            backgroundColor: 'white'

        }}>
            <Image style={{
                resizeMode: 'cover',
                width: 45,
                height: 45,
                borderRadius: 50,
                marginRight: 10,
            }} source={item.sourceImageProfile}/>
            <View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        fontWeight : 'bold',
                        fontSize : 16
                    }}>{item.postOwner}</Text>
                  
                    <Ionicons style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        marginTop: 5
                    }} name="ellipse-sharp" size={10} color={item.actif == 'True' ? "#26ea01" : "#959595" }/>
                 
                </View>
                
                <Text style={{
                    fontSize : 14
                }}>{item.ownerBio}</Text>
                <Text style={{
                    fontSize : 14,
                    color: '#808080',
                    paddingBottom: 10

                }}>{item.location}</Text>
                <Button/>
                
            </View>
            
            
        </View>
    )
}

const PostsList = () => {
    return (
        <View>
            <FlatList 
            data={posts}
            renderItem={({item}) => <PostItem item={item} /> }
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}


export default function HomeScreen({navigation}) {
    return(
       <PostsList/>
    )
}