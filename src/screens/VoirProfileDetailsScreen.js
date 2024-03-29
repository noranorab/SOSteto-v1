import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Image, FlatList, Pressable, ImageBackground, Switch, ScrollView} from 'react-native';
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
        <ScrollView testID='VoirProfileDetailsScreen' >
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

            <View style={{marginTop: 55}}>
                    <View style={{
                        
                        paddingBottom: 10,
                        borderBottomColor: '#E6E6E6',
                        borderBottomWidth : 5,
                    
                    }}>
                        
                            <View style={{ marginLeft: 10}}>
                                <View style={{
                                            flexDirection: 'row',
                                        
                                        }}>
                                            <Text style={{
                                                fontWeight : 'bold',
                                                fontSize : 20
                                            }}>{item.prenom} {item.nom}</Text>
                                        
                                            <Ionicons style={{
                                                flexDirection: 'row',
                                                marginLeft: 10,
                                                marginTop: 5
                                            }} name="ellipse-sharp" size={10} color={item.status == 'True' ? "#26ea01" : "#959595" }/>
                                </View>
                            
                                
                        <Text style={{
                                fontSize : 14,
                        }}>{item.ownerBio}</Text>
                    

                        <Text style={{
                                fontSize : 14,
                                paddingBottom: 10

                        }}>{item.tel}</Text>
                        <Text style={{
                                fontSize : 14,
                                color: '#808080',
                                paddingBottom: 10

                        }}>{item.location}</Text>

                        

                    </View>
                </View>
                <View style={{
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Disponibilité</Text>
                        <View>
                            <Text>Date</Text>
                            
                           
                            
                        </View>
                        <View>
                            <Text>Horaire</Text>
                            <View>
                                <Text>De</Text>
                                <Text>A</Text>
                            </View>

                        </View>
                        

                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>

                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>A propos</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Soins et Actes</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Diplômes et Formations</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Commentaires</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Langues parlées</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                <View style={{
                   height: 130,
                   paddingBottom: 10,
                   paddingTop:10,
                   borderBottomColor: '#E6E6E6',
                   borderBottomWidth : 5,
                }}>
                    <View style={{marginLeft: 10 }} >
                        <Text style={{
                        fontWeight : 'bold',
                        fontSize : 20
                        }}>Curriculum Vitae</Text>
                        <Text style={{
                        paddingTop: 10,
                        fontSize : 14
                        }}>{item.infirmier.apropos}</Text>
                        
                    </View>
                    
                
                </View>
                
                
            </View>
            

            

            {/* <PostContent item={item}/> */}
        </ScrollView>
    )
}