import React from "react";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View,FlatList,Model } from "react-native";
import GoalItem from "./components/GoalItem";
import Geojson from "react-native-maps";
import GoalInput from "./components/GoalInput";
export default function App() {

  const [inputs,setInputs] = useState([])

  function buttonHandeler(enteredText){
    setInputs((currentInputs) => [
      ...currentInputs,
      {text:enteredText, id:Math.random().toString()},
    ]);
  }
function deleteGoalHandeler(id){
  setInputs(currentInputs =>{
    return currentInputs.filter((goal)=> goal.id !==id);
  })
}

  return (

    <View style={styles.container}>
      <GoalInput onAddGoal={buttonHandeler} />
      <View style={styles.container}>
      <FlatList 
        data={inputs} 
        renderItem={itemData =>{
        return <GoalItem
         text={itemData.item.text}
         id={itemData.item.id}
        onDeleteItem={deleteGoalHandeler}/>;
      }}
      keyExtractor={(item,index) =>{
        return item.id
      }}
       alwaysBounceVertical={false} />     
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:16
  },
  map: {
    flex: 1,
    width: "100%",
  }
});

/*<MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      
      
       <ScrollView style={styles.container}>     
      {inputs.map((goal) =>
        <View style={styles.goalItem} key={goal}>
          <Text style={styles.textcolor}>{goal}</Text>
        </View>
      )}
      </ScrollView>*/