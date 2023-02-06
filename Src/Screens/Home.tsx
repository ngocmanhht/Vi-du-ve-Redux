import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { increasement, decreasement } from '../redux/countAction';
import { reset } from '../redux/countAction';
export const Home = () => {
 

  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);
  const [arr, setArr]= useState([])
  const [value, setValue]= useState(0)
  const [num, setNum]= useState(0)
// useEffect(() =>{
//   setNum(0)

// },[])
  const handleIncrease=()=>{
   
    dispatch(increasement())
    console.log(count)
    
  }
  const handleDeacrease=()=>{
 
    dispatch(decreasement())
    console.log(count)
  }
  const handleSet=()=>
  {
    dispatch(reset())
  

  }
  return (
    <View style={styles.backGround}>
     <Text> Vi du ve redux</Text> 
     <TouchableOpacity style={styles.functionBtn} onPress={ handleIncrease}>
      <Text style={styles.txt}>INCREASE</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.functionBtn} onPress={handleDeacrease}>
      <Text style={styles.txt}>DEACREASE</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.functionBtn} onPress={handleSet}>
      <Text style={styles.txt}>RESET</Text>
     </TouchableOpacity>
     <Text>{count}</Text>

   
     
    
     
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  backGround:
  {
    backgroundColor: '#B5BCBB',
    flex: 1,
    alignItems: 'center',

  },
 functionBtn:{
  borderWidth:1,
  width:'60%',
  height: 40,
  borderRadius:10,
   alignItems:'center',
   justifyContent: 'center',
   marginBottom:10

 },
  txt:{

  },
  textInput:{
    borderWidth:2,
    width:'80%',
    height:50,
    borderRadius:10,
    top:10
  }
})