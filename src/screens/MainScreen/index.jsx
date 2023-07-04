import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Publication from "../../components/Publication";
import { selectedPublication } from "../../store/actions/publication.action";


const MainScreen = ({navigation}) => {
  const publications = useSelector(state => state.publications.publications);
  const dispatch = useDispatch();
  const handleSelectedPublication = item => {
		dispatch(selectedPublication(item.id));
		navigation.navigate('details', {
			name: item.titulo,
		});
	};
  const renderItem = ({ item }) => (
    <Publication item={item} onSelected={handleSelectedPublication} />
  );
  return (
    <View style={styles.container}>
      <View>
      <FlatList
        data={publications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

export default MainScreen;
