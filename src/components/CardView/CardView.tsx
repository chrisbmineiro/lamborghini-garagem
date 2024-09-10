import React, { useEffect, useState } from "react";
import { View, Image, Text, Button } from "react-native";
import { styles } from "./CardViewStyles";
import logo from "../../../assets/logo.png";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import Divider from "../Divider/Divider";
import BuyButton from "../BuyButton/BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  useEffect(() => {
    (async () => {
      await loadCarData(1, setCarData);
    })();
  }, []);
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
        <Text style={styles.carBrand}>{carData?.releaseYear}</Text>
        <Text style={styles.carModel}>{carData?.carName}</Text>
      </View>
    );
  };

  const renderCarImage = () => {
    return (
      <Image
        source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}
        style={styles.image}
      />
    );
  };

  const renderPrice = () => {
    return (
      <View style={styles.priceControls}>
        <Button onPress={()=> handlePreviousItem(carData, setCarData)} title="<" color={"#01A6B3"} />
        <Text style={styles.price}>{carData?.price}</Text>
        <Button onPress={()=> handleNextItem(carData, setCarData)} title=">" color={"#01A6B3"} />
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
