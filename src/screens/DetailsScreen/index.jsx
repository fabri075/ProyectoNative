import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailsScreen = () => {
	const publication = useSelector(state => state.publications.selected);
	return (
		<View>
			<Text>{publication.titulo} </Text>
			<Text>{publication.descripcion} </Text>
		</View>
	);
};

export default DetailsScreen;
