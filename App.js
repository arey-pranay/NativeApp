import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="m-10 p-10 border border-red-500">yh</Text>
      <Button title="Btn" />
      <StatusBar style="auto" />
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
