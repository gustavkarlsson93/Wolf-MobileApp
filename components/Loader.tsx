import Lottie from "lottie-react-native";

const Loader = () => {
  return (
    <view className="rowRounded">
      <Lottie
        source={require("../assets/lottie/holeymoley-inpage-loader.json")}
        autoPlay
        loop
      />
    </view>
  );
};

export default Loader;
