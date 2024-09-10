import { View } from "react-native";
import React from "react";
import { styles } from "./HomeStyles";
import CardView from "../../components/CardView/CardView";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorner}></View>
        <View style={[styles.triangleCorner, styles.topRight]}></View>
        <View style={[styles.triangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}