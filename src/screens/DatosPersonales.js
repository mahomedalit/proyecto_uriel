import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DatosPersonales = (props) =>{

    return(

      <View style={styles.container}>
        <Text>Mi nuevo proyecto</Text>
        <MiComponente />
        <Datospersonal />
      </View>
    );
  };
  
  export default DatosPersonales;

  function MiComponente(){
    return <Text>Datos personales</Text>
  }
  
  /* su nombre
  Su apelido
  Su edad*/
  
  function Datospersonal(){
    return <View style={styles.container}>
      <Text>Miguel Angel</Text>
      <Text>Montes Contreras</Text>
      <Text>22 años</Text>
  
    </View>
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });