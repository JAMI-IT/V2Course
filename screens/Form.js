import { View, Text ,TextInput,StyleSheet,TouchableOpacity, Alert,FlatList} from 'react-native'
import React, { useState, useCallback, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Form() {

    const [FName, SetFname] = useState('');
  const [LName, SetLName] = useState('');


const [info, setInfo] = useState([{}]);
    const handleFullName = useCallback(() => {
        if (FName==false) {
            Alert.alert('Please Entert The First Name')
        }else if (LName==false) {
            Alert.alert('Please Entetr the Last Name')
        }
        else {
          let names={firstname:FName,lastname:LName}
          setInfo(current => [...current, names]);
         
          console.log(info)
        }
    },[FName,LName])

  
  const clearstate = () => {
      console.log('DOn Clear');
      SetFname('');
      SetLName('');
  }
  
  const udatedata = (index) => {
    const ind = info.indexOf(index);
      <View style={{backgroundColor:'red',height:500,width:500}}>
        <Text>Full Name :{info[ind]}</Text>
    </View>;
        console.log(info[ind]);

        console.log('fosnfafsdhfdgsakh');
    
 }

    const handleDelete=useCallback((index) => {        
      let ind = info.indexOf(index)
      if (ind > 0) {
        console.log('DON');
        info.splice(ind, 1);
        {
          clearstate();
        }
      }
      },
      [info],
  )
  
  useEffect(() => {
   { clearstate()}
  },[])
    
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
          <Text>Added</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonpress} onPress={{}}>
          <Text>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Buttonpress} onPress={{}}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={info}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            console.log(info),
            (
              <View style={{ flexDirection: 'row' }}>
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
                  style={styles.Fname}
                  onPress={() => udatedata(item)}
                >
                  <Text>
                    Full Name :{item.firstname}
                    {item.lastname}
                  </Text>
                </TouchableOpacity>
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
    alignSelf: 'center',
    height: 40,
    width: "80%",
    backgroundColor: 'teal',
    borderRadius: 5,
      margin: 5,
      color: 'white',
        justifyContent:'center',
      padding:4,
  },
});