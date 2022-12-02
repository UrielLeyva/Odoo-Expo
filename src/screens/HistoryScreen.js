import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    fecha: '20/20/0000, 00:00:00',
    disp: 'movil',
    Coord: '000000, -000000',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Item2 = ({ fecha }) => (
  <View style={styles.item2}>
    <Text style={styles.fecha}>{fecha}</Text>
  </View>
);

const HistoryScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  const renderItem2 = ({ item2 }) => (
    <Item2 fecha={item2.fecha} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        renderItem2={renderItem2}
        keyExtractor2={item2 => item2.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  fecha: {
    fontSize: 32,
  },
});

export default HistoryScreen;