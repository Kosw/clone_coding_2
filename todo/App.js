import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const [toDos, setToDos] = useState({}); // [1, 2, 3, 4, 5
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(s);
    setToDos(parsedData || {}); // null인 경우 빈 객체로 초기화
  };
  
  useEffect(() => {
    loadToDos();
  }, []);
  const [text, setText] = useState("");
  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = { 
      ...toDos, 
      [Date.now()]: {text, working},
  };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };
  const deleteToDo = async (key) => {
    Alert.alert(
      "Delete To Do",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            await setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ],
      { cancelable: false }
    );
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
        <ScrollView>
          {Object.keys(toDos).map(key => (
            toDos[key].working === working ?(
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
              <Entypo name="trash" size={24} color="white" />
              </TouchableOpacity>
            </View>
            ) : null
          ))}
        </ScrollView>
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
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});