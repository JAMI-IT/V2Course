import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react'
import { useState } from 'react/cjs/react.development'

export default function INCRE() {
const [incre,setincre]=useState(0)

    const Hancdleincre =useCallback ( () => {
        setincre(current=>(current+1));
    }, [incre, setincre])
    const Hancdleincre1 = () => {
        console.log(incre);
    }
    
        console.log(incre);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Hancdleincre();
        }}
      >
        <Text>increment: {incre}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Hancdleincre1();
        }}
      >
        <Text>increment: {incre}</Text>
      </TouchableOpacity>
    </View>
  );
}