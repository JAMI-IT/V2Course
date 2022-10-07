import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const CRUD = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLasttName] = useState('');
  const [selected, setSelected] = useState();
  const [values, setValues] = useState([]);

  const clearstate = useCallback(() => {
    setFirstName('');
    setLasttName('');
  }, []);

  const Add = useCallback(() => {
    setValues([...values, { FirstName, LastName }]);
    clearstate();
  }, [FirstName, LastName, values]);
  const ToUpdate = useCallback(
    index => {
      console.log(index);
      setSelected(index);
      setFirstName(values[index].FirstName);
      setLasttName(values[index].LastName);
    },
    [values],
  );

  const Update = useCallback(() => {
    values[selected] = { FirstName, LastName };
    setValues([...values]);
    setSelected(undefined);
    clearstate();
  }, [values, selected, FirstName, LastName]);

  const handleDelete = useCallback(
    indx => {
      setValues(() => values.filter((value, index) => index !== indx));
    },
    [values],
  );

  return (
    <View style={style.mainConatiner}>
      <Text>Hello world</Text>
      <View style={style.inputContainer}>
        <TextInput
          focu
          value={FirstName}
          onChangeText={setFirstName}
          style={style.input}
        />
        <TextInput
          value={LastName}
          onChangeText={setLasttName}
          style={style.input}
        />
      </View>
      <Button
        title={selected > -1 ? 'Update' : 'Add'}
        onPress={() => (selected > -1 ? Update() : Add())}
      />
      {selected > -1 && (
        <Button title="cancel" onPress={() => setSelected(undefined)} />
      )}
      <View>
        {values?.map((txt, index) => {
          return (
            <View style={style.inputContainer}>
              <TouchableOpacity
                style={{ flex: 0.8 }}
                onPress={() => ToUpdate(index)}
              >
                <Text>
                  {txt.FirstName} {txt.LastName}
                </Text>
              </TouchableOpacity>
              <Button title="delete" onPress={() => handleDelete(index)} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainConatiner: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    flex: 0.4,
    marginTop: 8,
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 12,
  },
  primaryButton: {
    marginTop: 8,
  },
});

export default CRUD;
