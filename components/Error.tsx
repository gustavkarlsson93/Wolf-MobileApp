import Lottie from "lottie-react-native";

const Error = () => {
  return (
    <view className="rowRounded">
      <Lottie
        source={require("../assets/lottie/error-dialog.json")}
        autoPlay
        loop
      />
    </view>
  );
};

export default Error;
