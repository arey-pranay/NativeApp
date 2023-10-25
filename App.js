import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [list, setList] = useState([]);
  function goalInputHandler(text) {
    setGoal(text);
  }
  function goalAddingHandler() {
    setList((prev) => [...prev, goal]);
    console.log(list);
    setGoal("");
  }
  return (
    <View className="bg-green-100 h-full pt-28 px-12">
      <View className="flex flex-row mb-4 items-center">
        <TextInput
          className="mr-6 pl-2 py-2 border-2 w-2/3 border-gray-400 align-middle"
          placeholder="Enter your text"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" color={"green"} onPress={goalAddingHandler} />
      </View>
      <Text>Your Task List</Text>
      <ScrollView className="flex w-full h-full my-6">
        <View className=" bg-green-600 h-full mg-2">
          {list.map((item) => {
            return (
              <Text className="my-1 ml-2 text-white text-md" key={item}>
                {item}
              </Text>
            );
          })}
        </View>
        {/* <View className=" bg-blue-300 h-1/3"></View>
        <View className=" bg-red-300 h-1/3"></View> */}
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
