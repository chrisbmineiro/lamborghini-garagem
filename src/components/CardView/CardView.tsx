import React from "react";
import { View, Image, Text, Button } from "react-native";
import { styles } from "./CardViewStyles";
import logo from "../../../assets/logo.png";
import { CAT_ASSETS_BASE_URL } from "../../constants/car";
import Divider from "../Divider/Divider";
import BuyButton from "../BuyButton/BuyButton";

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
      <View style={{ alignItems: "center" }}>
        <Text style={styles.carBrand}>Lamborgha</Text>
        <Text style={styles.carModel}>Ferrari</Text>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
      <Image
        source={{ uri: `${CAT_ASSETS_BASE_URL}1.png` }}
        style={styles.image}
      />
    );
  };

  const renderPrice = () => {
    return (
      <View style={styles.priceControls}>
        <Button onPress={()=>{}} title="<" color={"#01A6B3"} />
        <Text style={styles.price}>Valor</Text>
        <Button onPress={()=>{}} title=">" color={"#01A6B3"} />
      </View>
    );
  };

  return (
    <View style={styles.image}>
      {renderLogo()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPrice()}
    </View>
  );
}
