import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {Text, View,StyleSheet,TextInput,Image, TouchableOpacity, Keyboard, SafeAreaView, ActivityIndicator, FlatList,} from 'react-native';

const HomeScreen = ({navigation}) =>{
    const[recipes,setRecipes]= useState();
    const [searchQuery,setSearchQuery]= useState('');
    const[numberOfRecipes,setNumberOfRecipes] = useState('1')
    const[loading,setLoading] = useState(false);

    const apiId = '2410a346'
    const apiKey = '1a8694245de677925783ab19d1ed31f6'
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&from=0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;
    
    async function apiCall(){
        setLoading(true);
        let resp = await fetch(apiUrl);
        let respjson = await resp.json();
        setRecipes(respjson.hits);
        setLoading(false);
        Keyboard.dismiss()
        setSearchQuery('')

    }

    useEffect(() =>{
        setLoading(true)
        apiCall()
    },[])


    return(
        <View style={styles.container}>
            <Text style={styles.titulo} >¿Que receta buscas?</Text>
            <View style={styles.buscador}>
                <TextInput placeholder="Busca la receta..."
                style={styles.input}
                onChangeText={text => setSearchQuery(text)}
                />
                <TextInput
                    onChangeText={text => setNumberOfRecipes(text)}
                style={[styles.input,{width: '20%', fontSize: 18, marginLeft: 15,color: '008080', fontWeight:'bold'}]}
                //value={}
                keyboardType= 'number-pad'
                />
            </View>
            <TouchableOpacity style={styles.boton}
            onPress={apiCall}
            title='submit'>
                <Text style={styles.textoBoton}>Buscar</Text>
            </TouchableOpacity>
            <SafeAreaView style={{flex:1}}>
                {loading ? <ActivityIndicator size='large' color='D0A9F5'/>:
                <FlatList  style={styles.recipes} data={recipes} renderItem={({item}) =>(
                    <View style={styles.recipe}>
                        <Image style={styles.image}
                        source={{uri: `${item.recipe.image}`}}/>
                        <View style={{padding: 20, flexDirection: 'row'}}>
                            <Text style={styles.label}>{item.recipe.label}</Text>
                            <TouchableOpacity onPress={() =>{navigation.navigate('Details',{recipe: item.recipe})}}>
                                <Text style={{marginLeft: 50, fontSize:15,color:'#BE81F7'}}>
                                    Detalles
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                )}
            keyExtractor={(item, index)=>index.toString()}/>}
            </SafeAreaView>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input:{
        height: '120%',
        width: '65%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 15,
    },
    titulo:{
        fontSize: 23,
        fontWeight:'800', 
        width: '90%', 
        color:'#D0A9F5'
    },
    buscador:{
        display:'flex',
        flexDirection:'row',
    },
    boton:{
        backgroundColor: '#BE81F7',
        width: '90%',
        alignItems: 'center',
        margin: 15,
        height: 35,
        borderRadius: 15,
        justifyContent:'center',
        marginTop: 25,
    },
    textoBoton:{
        color:'white',
        fontSize: 20,
        fontWeight:'bold'
    },
    image:{
        width:'100%',
        height: 200,
        borderRadius:20,
    },
    label:{
        fontSize:15,
        width:'60%',
        color:'D0A9F5',
        fontWeight: '700'
    },
    recipe:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius: 8,
        elevation:5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        marginBottom: 40,
    }
})
export default HomeScreen;