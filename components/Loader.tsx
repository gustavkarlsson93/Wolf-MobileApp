import LottieView from "lottie-react-native";
import React from "react";
import { View, Text } from "react-native";

const Loader = () => {
  return (
    <View>
      <LottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../assets/lottie/holeymoley-inpage-loader.json")}
      />
    </View>
  );
};

export default Loader;
