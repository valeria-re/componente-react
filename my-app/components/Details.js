import React from "react";
import {ScrollView, Text, View ,StyleSheet} from 'react-native';

const Details = ({route}) =>{
    const {recipe} = route.params;
    return(
        <ScrollView>
            <View style={styles.details}>
                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Ingredientes:
                    </Text>
                    <Text style={styles.ingredientes}>{`${recipe.ingredients.map((item) => item['food'])}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Categoria:
                    </Text>
                    <Text style={styles.ingredientes}>{`${recipe.ingredients.map((item) => item['foodCategory'])}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Calorias:
                    </Text>
                    <Text style={styles.ingredientes}>   {`${recipe.calories}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Nombre de la Receta:
                    </Text>
                    <Text style={styles.ingredientes}>{`${recipe.label}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Tipo de comida:
                    </Text>
                    <Text style={styles.ingredientes}>  {`${recipe.mealType}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Descripcion :
                    </Text>
                    <Text style={styles.ingredientes}>{`${recipe.ingredientLines}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Etiqueta de Dieta:
                    </Text>
                    <Text style={styles.ingredientes}>{`${recipe.dietLabel}`}</Text>
                </View>

                <View style={styles.item}>
                    <Text style={{fontSize:22, color:'#BE81F7', fontWeight:'800'}}>
                        Tipo de cocina:
                    </Text>
                    <Text style={styles.ingredientes}>  {`${recipe.cuisineType}`}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
    details:{
        marginBottom:30,
        padding:5, 
    },
    ingredientes:{
            fontSize:20,
            color:'BE81F7',
    },
    item:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius: 8,
        elevation:5,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 10,
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap',
    }
})

export default Details;