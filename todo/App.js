import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { theme } from "./colors";

export default function App() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const [toDos, setToDos] = useState({}); // [1, 2, 3, 4, 5
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const [text, setText] = useState("");
  const addToDo = () => {
    if (text === "") {
      return;
    }
    const newToDos = Object.assign(
      {}, 
      toDos, 
      {[Date.now()]: {text, work: working}});
    setToDos(newToDos);
    setText("");
  };
  console.log(toDos);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <StatusBar style="light" />
      <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color: working ? "white": theme.grey}}>work</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={travel}>
        <Text style={{...styles.btnText, color: !working ? "white": theme.grey}}>여행</Text>
      </TouchableOpacity>
      </View>
        <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyType="done"
        //keyboardType='number-pad'
        value={text}
        // secureTextEntry // 비밀번호 입력
        style={styles.input} placeholder={working ? "Add a To Do": "Where do you want to go?"} placeholderTextColor={theme.grey}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },
});