import React from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>{palette.paletteName}</Text>

      <TouchableOpacity onPress={onPress}>
        <FlatList
          style={styles.list}
          data={palette.colors.slice(0, 5)}
          keyExtractor={item => item.colorName}
          renderItem={({ item }) => (
            <View style={[styles.color, { backgroundColor: item.hexCode }]} />
          )}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,    
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius:5,
  },
});

export default PalettePreview;
