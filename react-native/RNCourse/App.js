import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  function goalInputHandler(enteredText){
    setInputValue(enteredText)
    console.log(enteredText)
  };
  function addGoalHandler() {
    if(inputValue) {
      console.log('clicked: ', inputValue)
      setTodoList((currentCourseGoals) => [
        ...currentCourseGoals,
        {text: inputValue, id: Math.random().toString()},
      ]);
      setInputValue('')
    } else {
      alert('내용이 없습니다!')
    }
  };
  return (
    <View style={styles.addContainer}>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} value={inputValue} onChangeText={goalInputHandler} placeholder='목표를 작성해 주세요!'/>
        <Button onPress={addGoalHandler} title="목표 추가하기"/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={todoList} renderItem={(itemData) => {
          return (
            <View style={styles.goalItemView}>
              <Text style={styles.goalItemText}>{itemData.item.text}</Text>
            </View>
          )
        }}
        // keyExtractor={(item) => {
        //   return item.id;
        // }}
        alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueText: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 16,
  },
  redText: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'red',
    padding: 16,
  },
  addContainer: {
    padding: 50,
    flex:6,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
  },
  goalsContainer: {
    // flex: 5,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
  },
  goalItemView: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
    fontWeight: '900',
  }
});
