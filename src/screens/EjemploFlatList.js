import React, { useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import UsuarioItem from '../components/UsuarioItem';

const EjemploFlatList = (props) =>{

    const [cargando,setCargando] = React.useState(true);
    useEffect(()=>{
        cargarUsuarios();
    },[]);

    const [arreglo,setArreglo] = React.useState([]);

    /** fetch .then .then .catch */

    const cargarUsuarios = () =>{

        fetch('https://reqres.in/api/users?per_page=12')
        .then((response) => response.json())
        .then((json) => {

            console.log(json.data);
            setArreglo(json.data);
            setCargando(false);
        })
        .catch(() => {
            Alert.alert('Error!!');
        });
    };

    return (
        <FlatList
            refreshControl={
                <RefreshControl
                refreshing={cargando}/>
            }
            data={arreglo}
            renderItem = {(item)=><UsuarioItem
                                   avatar ={item.item.avatar}
                                   nombre ={item.item.first_name}
                                   apellido ={item.item.last_name}
                                   email ={item.item.email}
                                   navigation ={props.navigation}
                                  />}
            keyExtractor = {(item,index)=>`e-${item.id}`}/>
    );
    
};
  
  export default EjemploFlatList;