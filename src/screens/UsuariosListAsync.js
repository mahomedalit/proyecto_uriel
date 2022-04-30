import React, { useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import UsuarioItem from '../components/UsuarioItem';

const UsuariosListAsync = (props) =>{

    useEffect(()=>{
        cargarUsuarios();
    },[]);

    const [arreglo,setArreglo] = React.useState([]);
    const cargarUsuarios = async () => {
        //Espera una url del servicio
        //Siempre que se utiliza el async se espera un await
        const response = await fetch(
            'https://reqres.in/api/users?per_page=12'
        );
        const json = await response.json();
        setArreglo(json.data);
    };

    return (

        <FlatList

            data={arreglo}
            renderItem = {(item)=><UsuarioItem
                                   avatar ={item.item.avatar}
                                   nombre ={item.item.first_name}
                                   apellido ={item.item.last_name}
                                   email ={item.item.email}
                                   navigation ={props.navigation}
                                  />}
            keyExtractor = {(item,index)=>`e${item.id}`}

        />
    );
    
};
  
  export default UsuariosListAsync;