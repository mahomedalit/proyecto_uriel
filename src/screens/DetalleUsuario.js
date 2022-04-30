import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DetalleUsuario = (props) =>{
    return(
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
            <Text>Nombre completo: {props.route.params.nombre+" "+props.route.params.apellido}</Text>
        </View>
    );
};
export default DetalleUsuario;