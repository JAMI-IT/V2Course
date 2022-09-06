import { View, Text ,TextInput,StyleSheet,TouchableOpacity, Alert,FlatList,Button} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Form() {

  const [FName, SetFname] = useState('');
  const [LName, SetLName] = useState('');
  const [info, setInfo] = useState([]);
  const [indexvalue, setindexvalue] = useState();
  const [operation, setoperation] = useState('Add');

  const handleFullName = useCallback(() => {
    
    if (FName == false) {
      Alert.alert('Please Entert The First Name')
    } else if (LName == false) {
      Alert.alert('Please Entetr the Last Name')
    }
      else if (operation=='Update') {
        
    setInfo(values => values.map((value, i) => (i === indexvalue ? { firstname: FName, lastname: LName } : value)));
      setoperation('Add')
       {
         clearstate();
       }
      }
    else if (operation=='Add') {
      setInfo(current => [...current,{ firstname: FName, lastname: LName }]);
      {
        clearstate();
      }
    }

  }, [FName, LName])
  
  const handleDelete = useCallback((index) => {
    let ind = info.indexOf(index)
    if (ind >= 0) {
        {
          updatetext(index);
        }
      info.splice(ind, 1);
    }
  }, [info,FName,LName])

  const buttonpress = () => {
    if (operation == true) {
      console.log(operation);
    }
  }

  const handleUpdate = index => {
    {
      updatetext(index);
    }
    setindexvalue(info.indexOf(index))
    setoperation('Update');
  };
   const updatetext = index => {
     SetFname(index.firstname);
     SetLName(index.lastname);
   };

   const clearstate = () => {
     console.log('Don Clear');
     SetFname('');
     SetLName('');
   }; 
  return (
    <SafeAreaView>
      <View style={styles.boxtext}>
        <View>
          <Text>Enter the First Name</Text>
          <TextInput
            style={styles.textInput}
            value={FName}
            onChangeText={SetFname}
            placeholder="First Name"
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text>Enter the Last Name:</Text>
          <TextInput
            style={styles.textInput}
            value={LName}
            onChangeText={SetLName}
            placeholder="Last Name"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          margin: 4,
          padding: 5,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity style={styles.Buttonpress} onPress={handleFullName}>
          <Text>{operation}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={info}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            console.log(info),
            (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}
              >
                <TouchableOpacity onPress={() => handleDelete(item)}>
                  <Text
                    style={{
                      backgroundColor: 'red',
                      height: 40,
                      width: 40,
                      padding: 8,
                      borderRadius: 50,
                      margin: 5,
                    }}
                  >
                    <AntDesign name="delete" size={24} color="white" />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleUpdate(item)}
                  style={{
                    backgroundColor: '#0000FF',
                    height: 40,
                    width: 40,
                    padding: 8,
                    borderRadius: 50,
                    margin: 5,
                  }}
                >
                  <Text>
                    <FontAwesome name="exchange" size={24} color="white" />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.Fname}>
                  Full Name :{item.firstname}
                  {item.lastname}
                </Text>
              </View>
            )
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxtext: {
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  textInput: {
    padding: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },
  Buttonpress: {
      margin: 10,
      alignSelf: 'center',
    height: 40,
    width: 60,
    backgroundColor: 'yellow',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
    Fname: {
    height: 40,
    width: "65%",
    backgroundColor: 'teal',
    borderRadius: 5,
      padding: 4,
      color:'black'
  },
});