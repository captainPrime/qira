import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import VCLayout from "../../components/VCLayout";
import VCButton from "../../components/VCButton";
import VCText from "../../components/VCText";
import { router } from "expo-router";
import VCFooter from "../../components/VCFooter";
import { ForgotPasswordStyle } from "./forgot_password";
import { LOGO } from "../../helper/images";

const Verification = () => {
  const { control, handleSubmit, formState } = useForm();

  const pinCount = 5;

  const renderPinInputs = () => {
    const pinInputs = [];

    for (let i = 0; i < pinCount; i++) {
      pinInputs.push(
        <Controller
          key={i}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={style.pinInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => {
                onChange(text);
                if (text !== "" && i < pinCount - 1) {
                  // Move focus to the next input field
                  pinRefs[i + 1].focus();
                }
              }}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === "Backspace" && i > 0) {
                  // Delete backward and move focus to the previous input field
                  pinRefs[i - 1].focus();
                }
              }}
              value={value}
              ref={(ref) => (pinRefs[i] = ref)}
            />
          )}
          name={`pin${i}`}
          rules={{ required: "Pin is required" }}
        />
      );
    }

    return pinInputs;
  };

  const handleSubmitForm = (data) => {
    const pin = Array.from(
      { length: pinCount },
      (_, i) => data[`pin${i}`]
    ).join("");
    console.log("Entered PIN:", pin);
    router.navigate("set_password");
  };

  const pinRefs = Array(pinCount).fill(React.createRef());

  return (
    <VCLayout useSafeArea={true}>
      <View style={ForgotPasswordStyle.header}>
        <View style={{ marginVertical: 10 }}>
          <Image style={{ width: 103, height: 48 }} source={LOGO} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText type="h1" text="Email Verification" />
        </View>
        <View style={{ marginVertical: 10 }}>
          <VCText
            type="normal"
            align="center"
            text="Enter the OPT sent to your email address below at
            johndoe@gmail.com"
          />
        </View>
      </View>

      <View style={style.pinContainer}>{renderPinInputs()}</View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <VCText type="bold" align="center" text="Did’t receive code? " />
        <VCText type="bolder" align="center" text="Resend OTP" color="orange" />
      </View>

      <View style={style.buttonContainer}>
        <VCButton
          label="Verify"
          handleOnPress={handleSubmit(handleSubmitForm)}
        />
      </View>
      <View
        style={{
          bottom: 0,
        }}
      ></View>
    </VCLayout>
  );
};

const style = StyleSheet.create({
  header: {
    marginVertical: 15,
    marginTop: 50,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 20,
  },
  pinInput: {
    width: 58,
    height: 50,
    borderWidth: 1,
    borderRadius: 22,
    textAlign: "center",
    marginRight: 10,
    fontSize: 20,
    borderColor: "#D9D9D9",
  },
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30,
  },
});

export default Verification;
