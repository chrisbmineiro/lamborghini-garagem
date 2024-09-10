import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./CardViewStyles";
import logo from "../../../assets/logo.png";
import { CAT_ASSETS_BASE_URL } from "../../constants/car";

export default function CardView() {
  // sub-componente para renderizar o logo
  const renderLogo = () => {
    return (
      <View style={styles.logo}>
        <Image source={logo} style={styles.logoImg} />
      </View>
    );
  };

  const renderCarDetails = () => {
    return (
      <View style={{ alignItems: "center"}}>
        <Text style={styles.carBrand}>Lamborgha</Text>
        <Text style={styles.carModel}>Ferrari</Text>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
        <Image source={{uri: `${CAT_ASSETS_BASE_URL}1.png`}} style={styles.image} />
    );
  };

  return <View style={styles.image}>
    {renderLogo()}
    {renderCarDetails()}
    {renderCarImage()}
  </View>;
}
