import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible,setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoal(){
    setModalVisible(true);
  }
  function cancel(){
    setModalVisible(false);
  }
  function onClick(enteredGoal) {
    if(enteredGoal!=""){
      setCourseGoals((prev) => [
        ...prev,
        { text: enteredGoal, id: Math.random().toString() },
      ]);
    }
  }
  function deleteGoal(id){
    setCourseGoals((prev)=>{return prev.filter((goal)=> goal.id!==id)})
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add new Goal" color="#5e0acc" onPress={addGoal}/>
      <GoalInput visible={modalVisible} onClick={onClick} cancel={cancel} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => {
            return <GoalItem text={item.text} id={item.id} deleteGoal={deleteGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
