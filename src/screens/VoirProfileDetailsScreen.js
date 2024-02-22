import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable, ImageBackground, Switch} from 'react-native';
import { PostContent } from '../components/PostContent';
import { PostItem } from '../components/PostItem';
import { posts } from '../data/posts';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function VoirProfileDetailsScreen() {
    const {
        params: { item },
    } = useRoute()
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return(
        <View testID='VoirProfileDetailsScreen' >
            <ImageBackground
            source={require('./banniere.png')}
            style={{
            position: 'relative',
            backgroundColor: '#C1C1C1',
            width: '100%',
            resizeMode:"cover",
            height: 100 }}>
                
                <Image source={item.sourceImageProfile} style={{
                        resizeMode: 'cover',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginLeft: 10,
                        marginTop: 50,
                        borderWidth: 3,
                        borderColor: 'white'
                        
                        }}/>
            </ImageBackground>

            <View style={{
                marginLeft: 10,
                marginTop: 60
            }}>
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
                        paddingBottom: 10

                }}>{item.infirmier.tel}</Text>
                   <Text style={{
                        fontSize : 14,
                        color: '#808080',
                        paddingBottom: 10

                }}>{item.location}</Text>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Text style={{
                       
                        fontWeight: 'bold',
                        color: '#808080'
                    }}>Disponible</Text>
                    <Switch
                    style={{ transform:[{ scaleX: .7 }, { scaleY: .7 }] }}
                    trackColor={{ 
                            false:'#808080',
                            true: '#84c4c0'}}
                    thumbColor={isEnabled ? 'white' : '#C1C1C1'}
                    ios_backgroundColor= '#B0B0B0'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>

            </View>

            {/* <PostContent item={item}/> */}
        </View>
    )
}