import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Componente from './Componente';
import DatosPersonales from './DatosPersonales';
import EjemploFlatList from './EjemploFlatList';
import EjemploHook from './EjemploHook';
import EjemploState from './EjemploState';
import DetalleItem from './DetalleItem';

const Menu = (props) =>{

    return (

        <ScrollView>
            <Button title="Datos personales" onPress={()=>{
                props.navigation.navigate("DatosPersonales");
            }}/>
            <Button title="Ejemplo Hook" onPress={()=>{
                props.navigation.navigate("EjemploHook");
            }}/>
            <Button title="Ejemplo State" onPress={()=>{
                props.navigation.navigate("EjemploState");
            }}/>
            <Button title="Componente" onPress={()=>{
                props.navigation.navigate("Componente");
            }}/>
            <Button title="FlatList" onPress={()=>{
                props.navigation.navigate("EjemploFlatList");
            }}/>
            <Button title="Lista de Usuarios async" onPress={()=>{
                props.navigation.navigate("UsuariosListAsync");
            }}/>
            <Button title="Lista género" onPress={()=>{
                props.navigation.navigate("ListaGeneros");
            }}/>
            <Button title="Lista películas" onPress={()=>{
                props.navigation.navigate("ListaPeliculas");
            }}/>
        </ScrollView>
    );
};
  
  export default Menu;