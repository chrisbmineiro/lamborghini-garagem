import { View } from "react-native";
import { styles } from "./DividerStyles";

export default function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
    </View>
  );
}