import React from 'react';
import { Text, View, FlatList } from 'react-native';
import firebase from './../backend/firebase';

const ListaGeneros = (props) => {
	const [genero, setGenero] = React.useState([]);

	React.useEffect(() => {
		getGeneros();
	},[]);

	const getGeneros = () => {
		const arr = [];
		firebase.db.collection('genero')
		.get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				arr.push({
					id: doc.id,
					nombre: doc.data().nombre,
				});
			});
			setGenero(arr);
		});
	}
	return (
		<View>
			<FlatList
			data={genero}
			renderItem={
				(item) => {
					return(
						<View>
							<Text>{item.item.nombre}</Text>
						</View>
					);
				}}
			keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default ListaGeneros;