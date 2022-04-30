import React from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './../styles/main';
import firebase from './../backend/firebase';

const AgregarGenero = (props) => {
	const [nombre, setNombre] = React.useState('');
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<MaterialIcons
				name='add-box'
				size={64}
				color='tomato'
				style={{ alignSelf: 'center' }}
			/>

			<View
				style={{
					marginTop: 30,
					paddingHorizontal: 10,
				}}
			>
				<TextInput
					style={styles.formInput}
					placeholder='Nuevo género'
					keyboardType='default'
					maxLength={50}
					value={nombre}
					onChangeText={
						(val) => {
							setNombre(val)
						}
					}
				/>

				<Button title='Agregar género'
				onPress={async () => {
					try{
						const nuevoGenero = await
						firebase.db.collection('genero')
						.add({
							nombre: nombre,
						});
						Alert.alert('Se guardó correctamente el género');
					}catch(e){
						Alert.alert('Error: '+e);
					}
				}} />
			</View>
		</View>
	);
};

export default AgregarGenero;
